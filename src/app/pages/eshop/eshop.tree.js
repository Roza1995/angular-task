const blues = ['#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B'];

export const EshopTree = [
  { key: 'E-Shop', text: 'E-Shop', fill: "#ff8855", everExpanded: true, stroke: "white", font: "16pt sans-serif"},

  { key: 'Home', text: 'Home', color: blues[0], everExpanded: false, parent: 'E-Shop', font: "40pt sans-serif", icon: 'assets/icons/home.png', VisibleCircle: false},
  { key: 'Log-In', text: 'Log In', fill: "#1C2A37", stroke: "white", everExpanded: false, parent: 'Home', font: "50pt sans-serif" },
  { key: 'Register', text: 'Register', fill: "#1C2A37", stroke: "white", everExpanded: false, parent: 'Log-In', font: "40pt sans-serif",
    directPath: "/register" },

  { key: 'About', text: 'About', color: blues[0], everExpanded: false, parent: 'E-Shop', font: "40pt sans-serif", icon: 'assets/icons/about.png', VisibleCircle: false},
  { key: 'Log-In', text: 'Log In', fill: "#1C2A37", stroke: "white", everExpanded: false, parent: 'About', font: "50pt sans-serif" },
  { key: 'Register', text: 'Register', fill: "#1C2A37", stroke: "white", everExpanded: false, parent: 'About', font: "40pt sans-serif",
    directPath: "/register" },

  { key: 'Contact', text: 'Contact', color: blues[0], everExpanded: false, parent: 'E-Shop', font: "40pt sans-serif", icon: 'assets/icons/contact.jpeg', VisibleCircle: false },
  { key: 'Log-In', text: 'Log In', fill: "#1C2A37", stroke: "white", everExpanded: false, parent: 'Contact', font: "50pt sans-serif" },
  { key: 'Register', text: 'Register', fill: "#1C2A37", stroke: "white", everExpanded: false, parent: 'Contact', font: "40pt sans-serif",
    directPath: "/register" },




]