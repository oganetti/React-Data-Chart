import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import ReactExport from 'react-data-export';
import { authHeader } from '../Helpers';
import { url } from '../Services';
import { TopBar, MenuBar, BottomBar } from '../Components';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Sql extends Component {


  constructor(props) {
    super(props);

    this.state = {
      resultcolums: [],
      resultdata: [],
      resultExcel: {}
    }

  }

  componentWillMount() {

    var self = this;

    if (this.props.item.connectionState != null) {

      axios({
        method: 'POST',
        headers: { ...authHeader() },
        data: {
          connectionString: this.props.item.connectionState,
          name: this.props.item.frameState
        },
        url: `${url}/api/values`
      })
        .then(function (response) {
          self.setState({ resultcolums: response.data.listacolumnas, resultdata: response.data.rows, resultExcel: response.data.rows2 })
          

        })
        .catch(function (error) {
        
        });
    }
  };


  render() {

    var { resultcolums, resultdata, resultExcel } = this.state;
    var count = 0;

    return (
      <div>
        <TopBar />
        <MenuBar />
        <BottomBar />
        <div className="sqlPage">
        <ExcelFile element={<Button bsStyle="primary">Excel</Button>}>
          <ExcelSheet data={resultExcel} name="Excel">
            {resultcolums.map((item2) => (
              <ExcelColumn label={item2} value={item2} />
            ))}
          </ExcelSheet>
        </ExcelFile>
        <div className="sql">
          <Table responsive striped bordered hover variant="dark">
            <thead className = "sqlColumn">
              <tr>
                {resultcolums.map(col => (
                  <th>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {resultdata.map((item) => (
                count = 0,
                <tr>
                  {resultcolums.map((item2) => (
                    <td>{item[count++]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state
  };
};

const connectedSql = connect(mapStateToProps)(Sql);
export {connectedSql as Sql};

