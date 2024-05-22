import React from 'react';
import logo from './logo.svg';
import './App.css';
import dataJson from './sample-data.json';

function App() {

  const developerObjToString = JSON.stringify(dataJson);
  const developerJson = JSON.parse(developerObjToString);

  const devData = developerJson;
  const dates = ["2024-05-13","2024-05-14","2024-05-15","2024-05-16",
  "2024-05-17","2024-05-18","2024-05-19"];

  var filteredDevData = {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "dayWiseActivity": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "date": {
                "type": "string"
              },
              "items": {
                "type": "object",
                "properties": {
                  "children": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "count": {
                          "type": "number"
                        },
                        "label": {
                          "type": "string"
                        },
                        "fillColor": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "count",
                        "label",
                        "fillColor"
                      ]
                    }
                  }
                },
                "required": [
                  "children"
                ]
              }
            },
            "required": [
              "date",
              "items"
            ]
          }
      }
    },
    "required": [
      "name",
      "dayWiseActivity",
    ]
  }
  };

  devData.data.AuthorWorklog.rows.forEach(function(row) {
    
    if (!filteredDevData.items.name) {
      filteredDevData.items.name = [];
    }
    const filteredNameFromMail = row.name.match(/([A-Za-z]+)(?=\d*@)/)[0];
    filteredDevData.items.name.push(filteredNameFromMail);
  });
  console.log(filteredDevData);
  return (
    <div className="App">
      
    </div>
  );
  
}

export default App;
