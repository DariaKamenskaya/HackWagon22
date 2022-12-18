import React, { useState, useEffect } from "react";
import {
  Stack, IconButton, Grid, Button, Modal, Box
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useForm, useController } from "react-hook-form";
import axios from "axios";

import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";

//import uploadFile from "./S3Upload";
import { useNavigate } from "react-router-dom";

import { SheetJSFT } from './types';

import logo from '../../images/logo.png';
import * as XLSX from 'xlsx';
//import './LayoutOperator.css';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
    borderRadius: 35,
    backgroundColor: "#862633",
    padding: "18px 36px",
    fontSize: "18px",
    display: "flex"
}

const columns = [
  { field: 'is_load', headerName: 'Признак гружёности' },
  { field: 'start', headerName: 'Начальная точка маршрута'},
  { field: 'end', headerName: 'Конечная точка маршрута'},
  { field: 'departure_date', headerName: 'Дата и время отправления'},
  { field: 'fr_id', headerName: 'Номер груза'},
  { field: 'route_type', headerName: 'Тип отправки'},
  { field: 'rod', headerName: 'Род подвижного состава'},
  { field: 'common_ch', headerName: 'ID обобщённой характеристики вагона'},
  { field: 'vidsobst', headerName: 'Вид собственности'},
  { field: 'distance', headerName: 'Расстояние рейса'},
  { field: 'snd_org_id', headerName: 'ID грузоотправителя'},
  { field: 'rsv_org_id', headerName: 'ID грузополучателя'},
  { field: 'snd_roadid', headerName: 'ID дороги отправления'},
  { field: 'rsv_roadid', headerName: 'ID дороги назначения'},
  { field: 'snd_dp_id', headerName: 'ID региона отправления'},
  { field: 'rsv_dp_id', headerName: 'ID региона назначения'}
]
const columnsArray = [
  'is_load',
  'start',
  'end',
  'departure_date',
  'fr_id',
  'route_type',
  'rod',
  'common_ch',
  'vidsobst',
  'distance',
  'snd_org_id',
  'rsv_org_id',
  'snd_roadid',
  'rsv_roadid',
  'snd_dp_id',
  'rsv_dp_id'
]

const LayoutOperator = () => {
  const [data, dataSet] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [files, filesSet] = useState([{ name: "", tmp_name: "" }]);
  const [res, resSet] = useState("");
  const [showTable, setShowTable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [routes, setRoutes] = useState([]);

  const onSubmit = (data) => {
//    console.log(JSON.stringify(data, null, 4));
//    console.log("res", files);
    setShowTable(prev => !prev);
    handleClose();
  }

  const handleFileUpload = (e) => {
    if (!e.target.files) {
      return;
    }

    setIsSelected(true)
    setSelectedFile(e.target.files[0])

    let routes = [];

    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, {type:'binary'});
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        /* Convert array of arrays */
        const json = XLSX.utils.sheet_to_json(ws, {header:1});
        json.shift()

        json.forEach((el, id) => {
          let tmp = {'id': id}
          el.forEach((val, index) => {
            const key = columnsArray[index];
            tmp[key] = val
          });
          routes = routes.concat(tmp);
        });
        console.log(routes)
        dataSet(routes);

    };
    reader.readAsBinaryString(e.target.files[0]);
  };



  return (
    <div>
      <h1>Маршруты</h1>

      <Stack container spacing={2} justifyContent="center">

        <Grid item xs={2} sx={{ display: "flex" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="large"
            sx={{ flex: 2 }}
            onClick={handleOpen}
          >
            Загрузить
          </Button>
        </Grid>


      <DataGrid sx={{ display: "flex" }}
        autoHeight
        columns={columns}
        rows={data}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />


      </Stack>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Button
                variant="contained"
                component="label"
                startIcon={<UploadFileIcon />}
              >
                Select a file
                <input
                  type="file"
                  accept={SheetJSFT}
                  hidden
                  onChange={handleFileUpload}
                />
              </Button>
              {isSelected ? (
                <div>
                  <p> {selectedFile.name}</p>
                </div>
              ) : (
                <p>No file selected</p>
              )}

              <Button
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default LayoutOperator;