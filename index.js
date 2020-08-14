#!/usr/bin/env node
"use strict";

var React = require("react");

var _require = require("ink"),
    render = _require.render,
    Box = _require.Box,
    Text = _require.Text;

var App = function App() {
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    width: 70,
    borderStyle: "classic",
    margin: 2,
    padding: 1
  }, /*#__PURE__*/React.createElement(Box, {
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Box, {
    flexBasis: "30%"
  }, /*#__PURE__*/React.createElement(Text, null)), /*#__PURE__*/React.createElement(Text, null, "Mani Kiran / @nmanikiran")), /*#__PURE__*/React.createElement(Box, {
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Box, {
    flexBasis: "30%",
    justifyContent: "flex-end"
  }, /*#__PURE__*/React.createElement(Text, null, "Work : ")), /*#__PURE__*/React.createElement(Text, null, "Sr. Software Engineer ", /*#__PURE__*/React.createElement(Text, {
    color: "#F4CBB2"
  }, "at"), " Applaud HR", " ")), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    flexBasis: "30%",
    justifyContent: "flex-end"
  }, /*#__PURE__*/React.createElement(Text, null, "HackerRank : ")), /*#__PURE__*/React.createElement(Text, null, "https://hackerrank.com/nmanikiran")), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    flexBasis: "30%",
    justifyContent: "flex-end"
  }, /*#__PURE__*/React.createElement(Text, null, "Twitter : ")), /*#__PURE__*/React.createElement(Text, {
    color: "#00ACEE"
  }, "https://twitter.com/nmanikiran")), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    flexBasis: "30%",
    justifyContent: "flex-end"
  }, /*#__PURE__*/React.createElement(Text, null, "GitHub : ")), /*#__PURE__*/React.createElement(Text, {
    color: "#F4CBB2"
  }, "https://github.com/nmanikiran")), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    flexBasis: "30%",
    justifyContent: "flex-end"
  }, /*#__PURE__*/React.createElement(Text, null, "LinkedIn : ")), /*#__PURE__*/React.createElement(Text, {
    color: "#0e76a8"
  }, "https://linkedin.com/in/nmanikiran")), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    flexBasis: "30%",
    justifyContent: "flex-end"
  }, /*#__PURE__*/React.createElement(Text, null, "freecodecamp : ")), /*#__PURE__*/React.createElement(Text, null, "https://freecodecamp.org/nmanikiran")), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1.2
  }, /*#__PURE__*/React.createElement(Box, {
    flexBasis: "30%",
    justifyContent: "flex-end"
  }, /*#__PURE__*/React.createElement(Text, null, "Card : ")), /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement(Text, {
    color: "red"
  }, "npx"), " nmanikiran")));
};

render( /*#__PURE__*/React.createElement(App, null));
