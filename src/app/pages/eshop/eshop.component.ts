import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from "@angular/router";
import * as go from 'gojs';
import { EshopTree } from './eshop.tree.js';


@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.css'],
})
export class EshopComponent implements OnInit {

  @ViewChild("popupTemplate") public popupTemplateRef: TemplateRef<any>;

  myDiagram: any;
  popupText: string;

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    let $ = go.GraphObject.make;  // for conciseness in defining templates

    this.myDiagram =
      $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
        {
          initialContentAlignment: go.Spot.Center,
          layout: $(go.ForceDirectedLayout),
          // moving and copying nodes also moves and copies their subtrees
          "commandHandler.copiesTree": false,  // for the copy command
          "commandHandler.deletesTree": false, // for the delete command
          "draggingTool.dragsTree": false,  // dragging for both move and copy
          "undoManager.isEnabled": false
        });

    // Define the Node template.
    // This uses a Spot Panel to position a button relative
    // to the ellipse surrounding the text.
    this.myDiagram.nodeTemplate =
      $(go.Node, "Spot",
        {
          selectionObjectName: "PANEL",
          isTreeExpanded: false,
          isTreeLeaf: false,
          click: (e, obj) => {
            const { directPath, alert } = obj.part.data;
            if (alert) {
              this.showPopup(alert);
              return;
            }
            if (directPath) {
              this.router.navigate([directPath]);
            }
          }
        },

        // the node's outer shape, which will surround the text
        $(go.Panel, "Auto",
          { name: "PANEL" },
          $(go.Shape, "Circle",
            { fill: "whitesmoke", stroke: "transparent", margin: 0, strokeWidth: 0 },
            new go.Binding("visible", "VisibleCircle"),
            new go.Binding("fill", "fill"),
          ),
          $(go.Panel, "Vertical",
            $(go.TextBlock,
              { margin: 0, textAlign: "center" },
              new go.Binding("text", "text"),
              new go.Binding("stroke", "stroke"),
              new go.Binding("font", "font"),
            ),
            $(go.Picture,
              new go.Binding("source", "icon"))
          ),
        ),

        // the expand/collapse button, at the top-right corner
        $("TreeExpanderButton",
          {
            name: 'TREEBUTTON',
            width: 30, height: 30,
            alignment: go.Spot.TopRight,
            alignmentFocus: go.Spot.Center,
            // customize the expander behavior to
            // create children if the node has never been expanded
            click: (e, obj) => {  // OBJ is the Button
              let node = obj.part;  // get the Node containing this Button
              if (node === null) return;
              e.handled = true;
              this.expandNode(node);
            }
          }
        )  // end TreeExpanderButton
      );  // end Node

    this.myDiagram.addDiagramListener("InitialLayoutCompleted", (e) => {
      //alert("In listener");
      this.myDiagram.nodes.each(function (n) {
        if (n.data.text.indexOf("Count") >= 0) {
          if (n.data.cnt < 30)
            n.collapseTree();
        }
      })
    });

    // create the model with a root node data
    this.myDiagram.model = new go.TreeModel(EshopTree);
  }

  showPopup(alertText) {
    this.popupText = alertText;
    this.dialog.open(this.popupTemplateRef, { width: '450px' });
  }

  expandNode(node) {
    let diagram = node.diagram;
    diagram.startTransaction("CollapseExpandTree");
    // this behavior is specific to this incrementalTree sample:
    let data = node.data;
    if (!data.everExpanded) {
      // only create children once per node
      diagram.model.setDataProperty(data, "everExpanded", true);
      // let numchildren = this.createSubTree(data);
      let numchildren = this.getCountOfChild(data);
      if (numchildren === 0) {  // now known no children: don't need Button!
        node.findObject('TREEBUTTON').visible = false;
      } else {
        this.removeTreeButtonInChildren(data);
      }
    }
    // this behavior is generic for most expand/collapse tree buttons:
    if (node.isTreeExpanded) {
      diagram.commandHandler.collapseTree(node);
    } else {
      diagram.commandHandler.expandTree(node);
    }
    diagram.commitTransaction("CollapseExpandTree");
    this.myDiagram.zoomToFit();
  }

  // This dynamically creates the immediate children for a node.
  // The sample assumes that we have no idea of whether there are any children
  // for a node until we look for them the first time, which happens
  // upon the first tree-expand of a node.
  createSubTree(parentdata) {
    let numchildren = Math.floor(Math.random() * 10);
    if (this.myDiagram.nodes.count <= 1) {
      numchildren += 1;  // make sure the root node has at least one child
    }
    // create several node data objects and add them to the model
    let model = this.myDiagram.model;
    let parent = this.myDiagram.findNodeForData(parentdata);

    let degrees = 1;
    let grandparent = parent.findTreeParentNode();
    while (grandparent) {
      degrees++;
      grandparent = grandparent.findTreeParentNode();
    }

    for (let i = 0; i < numchildren; i++) {
      let childdata = {
        key: model.nodeDataArray.length,
        parent: parentdata.key,
        rootdistance: degrees
      };
      // add to model.nodeDataArray and create a Node
      model.addNodeData(childdata);
      // position the new child node close to the parent
      let child = this.myDiagram.findNodeForData(childdata);
      child.location = parent.location;
    }
    return numchildren;
  }

  removeTreeButtonInChildren(nodeData) {
    let node = this.myDiagram.findNodeForData(nodeData);
    if (node && node.findTreeChildrenNodes()) {
      node.findTreeChildrenNodes().each((childNode) => {
        let numchildren = (childNode && childNode.findTreeChildrenNodes()) ? childNode.findTreeChildrenNodes().count : 0;
        if (numchildren === 0) {  // now known no children: don't need Button!
          childNode.findObject('TREEBUTTON').visible = false;
        }
      });
    }
  }

  getCountOfChild(nodeData) {
    let node = this.myDiagram.findNodeForData(nodeData);
    return (node && node.findTreeChildrenNodes()) ? node.findTreeChildrenNodes().count : 0;
  }

  expandAtRandom() {
    let eligibleNodes = [];
    this.myDiagram.nodes.each((n) => {
      if (!n.isTreeExpanded) eligibleNodes.push(n);
    })
    let node = eligibleNodes[Math.floor(Math.random() * (eligibleNodes.length))];
    this.expandNode(node);
  }

}
