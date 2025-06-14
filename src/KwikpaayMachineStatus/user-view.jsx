import $ from 'jquery';
import moment from 'moment';
import Select from 'react-select';
import React, { useState,useEffect,} from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { GetClentNameDetails} from '../_mock/customers';
import { mapping,AllMachines} from '../_mock/AllMachines';

import { GetMachineStatus } from '../_mock/Kwikpay';

import Scrollbar from '../components/scrollbar';

import TableNoData from './table-no-data';
import UserTableRow from './user-table-row';
import UserTableHead from './user-table-head';
import TableEmptyRows from './table-empty-rows';
import UserTableToolbar from './user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from './utils';


const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

//  Users ui started here

export default function KwikpayPowerFailedReport() {
  const [command,setCommand]=useState('');
  const [startDate,setStartDate]=useState(moment().format('YYYY-MM-DD'));
  const [endDate,setEndDate]=useState(moment().format('YYYY-MM-DD'));
  const[machines,setMachines]=useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [options,setOptions]=useState([]);
  const [cInfo,setCInfo]=useState(["City","Zone","Ward","Beat"]);
  
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openModal, setOpenModal] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [message,setMessage]=useState("");
  const [type,setType]=useState("");
  const [lastRow,setLastRow]=useState("");
  const showAlertMessage = () => {
      setShowAlert(true);
  
      // You can optionally set a timeout to hide the alert after a few seconds
      setTimeout(() => {
      setShowAlert(false);
      }, 5000); // Hide the alert after 5 seconds (5000 milliseconds)
  };

  const handleModalOpen = () => {
   
 
    setOpenModal(true);
    // setTimeout(()=>{
         
    //   $('#mdlPwd [name="name"]').val(row.name);
    //   $('#mdlPwd [name="email"]').val(row.email);
    // },200)
  };
  const handleModalClose = () => {
    setOpenModal(false);
    setTimeout(()=>{
      $('[name="machine"]').val('').trigger('change');
      $('[name="uid"]').val('').trigger('change');
      $('[name="city"]').val('Mumbai').trigger('change');
      $('[name="installedOn"]').val('').trigger('change');
    },200)
  };

useEffect(()=>{
  GetMachineStatus(startDate,endDate).then((res)=>{
    setMachines(res);
    
   })
  const Interval=setInterval(()=>{
    GetMachineStatus(startDate,endDate).then((res)=>{
      setMachines(res);
     })

  },4000)

  return ()=>clearInterval(Interval);
  
},[startDate,endDate])



 

//  createMapping submit form function
  const SubmitForm=()=>{
   const obj={
    machine: selectedOption.value,
    uid: $('[name="uid"]').val(),
    city: $('[name="city"]').val(),
    installedOn: $('[name="installedOn"]').val(),
   }
   
   if (!obj.machine) {
    showAlertMessage();
    setType("warning");
    setMessage("Invalid Machine Number") 
     
     }
   else if (!obj.uid) { 
    showAlertMessage();
    setType("warning");
    setMessage("Invalid Uid") 
     
  }
   else if (!obj.city) {

    showAlertMessage();
    setType("warning");
    setMessage("Please select city") 
    }
   else if (!obj.installedOn) {
    showAlertMessage();
    setType("warning");
    setMessage("Please seclect date") 
    }
    else{
      mapping(obj).then((r)=>{
        showAlertMessage();
        setType("success");
        setMessage("Successfully Created") ;
        handleModalClose();
      })
    }
   
   
   
  



  }
 
  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = machines.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, n) => {
    const selectedIndex = selected.indexOf(n);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, n);
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


  const handleSelectChange = (elem) => {
    setSelectedOption(elem);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: machines,
    comparator: getComparator(order, orderBy),
    filterName,
    command
  });

  const notFound = !dataFiltered.length && !!filterName;


 
   
   
  
  

   

  return <>
     {/* Popup message */}
      <Stack spacing={2} sx={{ width: '100%' }}>
    
    <Snackbar  anchorOrigin={{ vertical:'top', horizontal:'right' }} open={showAlert} autoHideDuration={4000} onClose={()=>setShowAlert(false)}>
      <Alert onClose={()=>setShowAlert(false)} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>

     </Stack>
  
    <Container maxWidth="xxl">
      {/* createMapping button */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h5">Kwikpay Device Status</Typography>
        {/* <button type='button' className="btn btn-sm btn-warning mx-2 text-white float-right" id="btn-mapping" onClick={handleModalOpen}>Create
                        Mapping</button> */}

        {/* <Button variant="contained" color="inherit"  onClick={handleOpenMenu} startIcon={<Iconify icon="eva:plus-fill" />}>
          New User
        </Button> */}
         <Stack direction="row" justifyContent="flex-end" spacing={2} className="p-3">
         {/* <div className="d-flex flex-column">
      <h5>Serach Command:</h5>
      <input
        type="text"
        className="form-control"
        name="command"
      
        onChange={(e) => setCommand(e.target.value)}
      />
    </div> */}
         <div className="d-flex flex-column me-2">
      <h5>Start Date:</h5>
      <input
        type="date"
        className="form-control"
        defaultValue={new Date().toISOString().split('T')[0]}
        name="startDate"
        min="2023-07-08"
        onChange={(e) => setStartDate(e.target.value)}
      />
    </div>
    <div className="d-flex flex-column">
      <h5>End Date:</h5>
      <input
        type="date"
        className="form-control"
        defaultValue={new Date().toISOString().split('T')[0]}
        name="endDate"
        min="2023-07-08"
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>
    </Stack>
      </Stack>
     
   
 
      {/* <Stack spacing={2} sx={{ width: '100%' }}>
    
    <Snackbar  anchorOrigin={{ vertical:'top', horizontal:'right' }} open={showAlert} autoHideDuration={4000} onClose={()=>setShowAlert(false)}>
      <Alert onClose={()=>setShowAlert(false)} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>

     </Stack> */}

      <Card>
   
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
          style={{ marginTop: '-2.5rem' }} // equivalent to mt: -10
        />
          
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              {/* Table heading */}
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={machines.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'id', label: 'Sr.No' },
                  { id: 'MachineNumber', label: 'Serial Number'},
                  { id: 'LastHBT', label: 'Start Time' },
                  { id: 'DateTimeOfStatus', label: 'End Time' },
                  { id: 'Status', label: 'Status' },
                  { id: 'date', label: `Date & Time` },
               
               
                ]}
              />
              {/* Table Body */}
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row,i) => (
                    <UserTableRow
                      sr={page*rowsPerPage+i+1}
                      key={row.id}
                      name={row.name}
                      role={row.role}
                      email={row.email}
                      city={row.city}
                      zone={row.zone}
                      ward={row.ward}
                      beat={row.beat}
                      row={row}
                      data={dataFiltered}
                      // isVerified={row.isVerified}
                      // selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, machines.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={machines.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25 ,100]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
    <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
        <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Create Mapping</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" onClick={handleModalClose}>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group my-2">
                            <h6>Machine No. (PCB No.):</h6>
                            <Select
                                name="machine"
                                value={selectedOption}
                                onChange={handleSelectChange}
                                options={options}
                                isSearchable // Equivalent to isSearchable={true}
                                placeholder="Select option..."
                            />
                            {/* <input type="text" className="form-control" name="machine" /> */}
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group my-2">
                            <h6>UID:</h6>
                            <input type="text" className="form-control" name="uid" />
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group my-2">
                            <h6>City:</h6>
                            <select className="form-control" name="city">
                                <option value="Mumbai" selected>Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="SS-UK">SS-UK</option>
                                <option value="DoE-HAR">DoE-HAR</option>

                            </select>
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group my-2">
                            <h6>Installed On:</h6>
                            <input className="form-control" type="date" name="installedOn" />
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={SubmitForm}>Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleModalClose}>Close</button>
            </div>
        </div>
    </div>

        </Box>
        </Modal>
  
  </>
}
