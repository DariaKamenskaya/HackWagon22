import React, { useState, useEffect } from "react";
import dayjs, { Dayjs } from 'dayjs';
import {
  Stack, IconButton, Grid, Button, ListItemText, ListItemAvatar, Avatar,
  Paper, InputBase, Modal, TextField, Box, FormControl, FormLabel, RadioGroup, 
  FormControlLabel, Radio, Typography
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useForm, useController } from "react-hook-form";
import axios from "axios";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import UploadFileIcon from "@mui/icons-material/UploadFile";
//import ShareDataItem from "./ShareDataItem";
//import uploadFile from "./S3Upload";
//import './LayoutMerchant.css';
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 20,
  mb: 2,
  height: 400,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "scroll"
};

const buttonStyle = {
    borderRadius: 35,
    backgroundColor: "#862633",
    padding: "18px 36px",
    fontSize: "18px"
}

const LayoutMerchant = () => {
    // const [isTrain, handleIsTrain] = useState(false);

    // function handleTrainClick() {
    //   handleIsTrain(true);
    //}


    const [data, dataSet] = useState([]);
    const [datetimeValue, setDatetimeValue] = useState(dayjs('2022-11-18T00:00:00.000Z'));
    const {
       register,
       handleSubmit,
       formState: { errors },
       setValue,
    } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data, null, 4));
    }

    return (
    <div>
        <h1>Маршрут</h1>
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <FormControl>
                <FormLabel id="radio-buttons-group-label">Признак гружёности</FormLabel>
                <RadioGroup
                  aria-labelledby="radio-buttons-group-label"
                  defaultValue="0"
                  name="is_load"
                  row
                >
                  <FormControlLabel value="0" control={<Radio />} label="Порожний" />
                  <FormControlLabel value="1" control={<Radio />} label="Гружёный" />
                </RadioGroup>
              </FormControl>

              <TextField
                required
                id="outlined-required"
                label="Начальная точка маршрута"
                defaultValue=""
                inputProps={register('start')}
              />

              <TextField
                required
                id="outlined-required"
                label="Конечная точка маршрута"
                defaultValue=""
                inputProps={register('end')}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  value={datetimeValue}
                  label="Дата и время отправления"
                  onChange={(newValue) => {
                    setDatetimeValue(newValue);
                  }}
                />
              </LocalizationProvider>

              <TextField
                required
                id="outlined-number"
                label="Номер груза"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('fr_id')}
              />

              <TextField
                required
                id="outlined-number"
                label="Тип отправки"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('route_type')}
              />

              <TextField
                required
                id="outlined-number"
                label="Род подвижного состава"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('rod')}
              />

              <TextField
                required
                id="outlined-number"
                label="ID обобщённой характеристики вагона"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('common_ch')}
              />

              <TextField
                required
                id="outlined-number"
                label="Вид собственности"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('vidsobst')}
              />

              <TextField
                required
                id="outlined-number"
                label="Расстояние рейса"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('distance')}
              />

              <TextField
                required
                id="outlined-number"
                label="ID грузоотправителя"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('snd_org_id')}
              />

              <TextField
                required
                id="outlined-number"
                label="ID грузополучателя"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('rsv_org_id')}
              />

              <TextField
                required
                id="outlined-number"
                label="ID дороги отправления"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('snd_roadid')}
              />

              <TextField
                required
                id="outlined-number"
                label="ID дороги назначения"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('rsv_roadid')}
              />

              <TextField
                required
                id="outlined-number"
                label="ID региона отправления"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('snd_dp_id')}
              />

              <TextField
                required
                id="outlined-number"
                label="ID региона назначения"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={register('rsv_dp_id')}
              />


              <Button
                style={buttonStyle}
                variant="contained"
                type="submit"
              >
                Рассчитать
              </Button>
            </Stack>
          </form>
        </Box>
    </div>
    );
}

export default LayoutMerchant;