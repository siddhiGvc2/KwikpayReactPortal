// import $ from 'jquery';
import moment from "moment";
import Select from 'react-select';
import {useState, useEffect} from 'react';

import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import Table from '@mui/material/Table';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';

// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';

// import { users } from 'src/_mock/user';
// import {GetClentNameDetails} from 'src/_mock/customers';

// import Scrollbar from 'src/components/scrollbar';

// import { emptyRows} from '../utils';

import {getTestMode, setTestMode,AllMacAddress} from './_mock/macAddress';
// import Iconify from 'src/components/iconify';

// import TableNoData from '../table-no-data';
import UserTableRow from './user-table-row';

// import UserTableHead from '../user-table-head';
// import TableEmptyRows from '../table-empty-rows';
// import UserTableToolbar from '../user-table-toolbar';
// import {  applyFilter, getComparator } from '../utils';
// ----------------------------------------------------------------------

export default function KwikpayBoards() {

  const [options1,setOptions1]=useState([]);
  const [options2,setOptions2]=useState([]);
  const [options3,setOptions3]=useState([]);

  const [selectedOption1, setSelectedOption1] = useState({id:-1});
  const [selectedOption2, setSelectedOption2] = useState({id:-1});
  const [selectedOption3, setSelectedOption3] = useState({id:-1});

  const [value1,setValue1]=useState({});
  const [value2,setValue2]=useState({});
  const [value3,setValue3]=useState({});

  const [isChecked, setIsChecked] = useState(false);

  // const [page, setPage] = useState(0);

  // const [order] = useState('asc');

  const [selected, setSelected] = useState([]);

  // const [orderBy] = useState('name');

  // const [filterName, setFilterName] = useState('');

  // const [rowsPerPage, setRowsPerPage] = useState(10);

  const [data,setData]=useState([])

  const online = a => moment().diff(moment.utc((a.lastHeartBeatTime)), 'minute') < 10;

  useEffect(()=>{
    
    AllMacAddress().then((res)=>{

      const filteredData=res.filter((elem)=> online(elem) );
      setData(filteredData);

      const formattedData = filteredData.map((option,i) => ({
        value: option.MacID,
        label: option.MacID,
        id:i
      }));

    

      setOptions1(formattedData);
     
      setOptions2(formattedData);

      setOptions3(formattedData);
      // console.log(selectedOption1.id>=0);
      if(selectedOption1.id>=0)
        {
          // console.log(res[selectedOption1.id]);
          setValue1(filteredData[selectedOption1.id]);
         
        }
        if(selectedOption2.id>=0)
          {
            setValue2(filteredData[selectedOption2.id]);
          }

          if(selectedOption3.id>=0)
            {
              setValue3(filteredData[selectedOption3.id]);
            }
     
      
      
    })

    getTestMode().then((res)=>{

      setIsChecked(res.testMode);
    })

    const Interval=setInterval(()=>{
      AllMacAddress().then((res)=>{
    
        const filteredData=res.filter((elem)=> online(elem) );
        setData(filteredData);
        const formattedData = filteredData.map((option,i) => ({
          value: option.MacID,
          label: option.MacID,
          id:i
        }));
  
      
  
        setOptions1(formattedData);
       
        setOptions2(formattedData);

        setOptions3(formattedData);
        // console.log(selectedOption1.id>=0);
        if(selectedOption1.id>=0)
          {
            // console.log(res[selectedOption1.id]);
            setValue1(filteredData[selectedOption1.id]);
           
          }
          if(selectedOption2.id>=0)
            {
              setValue2(filteredData[selectedOption2.id]);
            }
            if(selectedOption3.id>=0)
              {
                setValue3(filteredData[selectedOption3.id]);
              }
        
        
      })
      getTestMode().then((res)=>{
      
           setIsChecked(res.testMode);
       
     })

    },500)



  

    return()=>{
      clearInterval(Interval);
    }
 

  },[selectedOption1,selectedOption2,selectedOption3])

  
  

  // const handleSort = (event, id) => {
  //   const isAsc = orderBy === id && order === 'asc';
  //   if (id !== '') {
  //     setOrder(isAsc ? 'desc' : 'asc');
  //     setOrderBy(id);
  //   }
  // };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = dataFiltered.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleSelectChange1 = (elem) => {
    setSelectedOption1(elem);
    
   
    AllMacAddress().then((res)=>{
    
      const filteredData=res.filter((m)=> online(m) )
      console.log(filteredData)
      setData(filteredData);
      console.log(data);
      // setValue1(res[elem.id]);
      
    })
  };
  const handleSelectChange2 = (elem) => {
    setSelectedOption2(elem);
    AllMacAddress().then((res)=>{
      const filteredData=res.filter((m)=> online(m) )
      console.log(filteredData)
      setData(filteredData);
      
    })
  };

  const handleSelectChange3 = (elem) => {
    setSelectedOption3(elem);
    AllMacAddress().then((res)=>{
      const filteredData=res.filter((m)=> online(m) )
      console.log(filteredData)
      setData(filteredData);
      
    })
  };

  const handleChange = () => {
    setTestMode();
   
  };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setPage(0);
  //   setRowsPerPage(parseInt(event.target.value, 10));
  // };

  // const handleFilterByName = (event) => {
  //   // setPage(0);
  //   setFilterName(event.target.value);
  // };

  // const dataFiltered = applyFilter({
  //   inputData: data,
  //   comparator: getComparator(order, orderBy),
  //   filterName,
  // });

  // const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container maxWidth='xxl'>
     
     <Card  spacing={2}  sx={{padding:'20px', justifyContent:'center'}}>
      <Typography variant="h4" sx={{ mb: 5 }}>
      Boards
      </Typography>
      <div className="row">
                    <div className="col-md-4">
                        <div className="form-group my-2">
                            <h6>Board1:</h6>
                            <Select
                                name="board1"
                                value={selectedOption1}
                                onChange={handleSelectChange1}
                                options={options1}
                                isSearchable // Equivalent to isSearchable={true}
                                placeholder="Select option..."
                            />
                            {/* <input type="text" className="form-control" name="machine" /> */}
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group my-2">
                            <h6>Board2:</h6>
                            <Select
                                name="board2"
                                value={selectedOption2}
                                onChange={handleSelectChange2}
                                options={options2}
                                isSearchable // Equivalent to isSearchable={true}
                                placeholder="Select option..."
                            />
                            {/* <input type="text" className="form-control" name="machine" /> */}
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group my-2">
                            <h6>Board3:</h6>
                            <Select
                                name="board3"
                                value={selectedOption3}
                                onChange={handleSelectChange3}
                                options={options3}
                                isSearchable // Equivalent to isSearchable={true}
                                placeholder="Select option..."
                            />
                            {/* <input type="text" className="form-control" name="machine" /> */}
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
              </div>
          
              <div className='row'>
                 <div className="col-md-4">
                  <UserTableRow
                      key={value1.id}
                     
                      testMode={isChecked}
                      board={1}
                      m={value1}
                   
                      handleClick={(event) => handleClick(event, value1.UID)}
                    />
                  </div>
                  <div className="col-md-4">
                  <UserTableRow
                      key={value2.id}

                      testMode={isChecked}
                      m={value2}
                      board={2}
                      handleClick={(event) => handleClick(event, value2.UID)}
                    />
                  </div>
                  <div className="col-md-4">
                  <UserTableRow
                      key={value3.id}

                      testMode={isChecked}
                      m={value3}
                      board={3}
                      handleClick={(event) => handleClick(event, value3.UID)}
                    />
                  </div>

              </div>
        
        {/* <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        /> */}

       
      </Card>
    </Container>
  );
}