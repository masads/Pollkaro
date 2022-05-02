import * as React from 'react'
import { Box, Stepper, Step, StepLabel, Button, Typography, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import axios from "axios";
import API_URL from "../components/API_URL";


const steps = ['Personal Information', 'Credential', 'Identity Picture'];

const client = axios.create({
  baseURL: API_URL,
});

function Register() {
<<<<<<< HEAD
    const [activeStep, setActiveStep] = React.useState(0);
    const [fName,setfName]=React.useState('');
    const [lName,setlName]=React.useState('');
    const [bDate,setbDate]=React.useState(new Date());
    const [Email,setEmail]=React.useState('');
    const [Password,setPassword]=React.useState('');
    const [cnic,setcnic]=React.useState('');
    const [profileImage,setprofileImage]=React.useState('https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png');
    const [frontImage,setfrontImage]=React.useState('');
    const [backImage,setbackImage]=React.useState('');
    const [Alert, setAlert] = React.useState(null);
    const [count,setCount]=React.useState(0)
=======
  const [activeStep, setActiveStep] = React.useState(0);
  const [fName, setfName] = React.useState('');
  const [lName, setlName] = React.useState('');
  const [bDate, setbDate] = React.useState(new Date());
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [cnic, setcnic] = React.useState('');
  const [profileImage, setprofileImage] = React.useState('https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png');
  const [frontImage, setfrontImage] = React.useState('');
  const [backImage, setbackImage] = React.useState('');

  const [Alert, setAlert] = React.useState(null);
  const [count, setCount] = React.useState(0)
>>>>>>> 3960f9be33deb44ae18b1d9fd33d867c1771d053

  const [profileImageData, setprofileImageData] = React.useState(null);
  const [frontImageData, setfrontImageData] = React.useState('');
  const [backImageData, setbackImageData] = React.useState('');

  const onChangePicture = (e, id) => {
    setCount(count + 1)
    if (e.target.files[0]) {

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        if (id == 1) { setprofileImage(reader.result); setprofileImageData(e.target.files[0]); }
        else if (id == 2) { setfrontImage(reader.result); setfrontImageData(e.target.files[0]); }
        else { setbackImage(reader.result); setbackImageData(e.target.files[0]); }
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  async function RegisterUser() {

    if (fName.length != 0 && lName.length != 0 && bDate.length != 0 && Email.length != 0 && Password.length != 0 && cnic.length != 0) {
      let arr = [profileImageData, frontImageData, backImageData]
      
        const iData = new FormData();
        iData.append("Images",arr[0])
        iData.append("Images",arr[1])
        iData.append("Images",arr[2])
        client
          .post("/images", iData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(
            (response) => {
              console.log("image add sucessfully");
            },
            (response) => {
              console.log("image add not sucessfully");
            }
          );
      
      let data = {
        fname: fName,
        lname: lName,
        birdthDate: bDate,
        email: Email,
        password: Password,
        CNIC: cnic
      }
      client
        .post("/signup", data,)
        .then(
          (response) => {
            console.log("image add sucessfully");
          },
          (response) => {
            console.log("image add not sucessfully");
          }
        );
      setActiveStep(activeStep + 1)
    } else {
      alertBox("Please fill required field")
    }
  }

  function alertBox(message)
  {
    setAlert(<div className="bg-red-100 border border-red-400 text-red-700 mt-4 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">{message}</strong>

        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg onClick={() => { setAlert('') }} xmlns="http://www.w3.org/2000/svg" className="pt-1 h-5 w-5 hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </div>)
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (


    <div className="mt-[2rem] min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-14 w-auto"
            src="logo.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create New account</h2>
          {Alert}
        </div>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              return (
                <Step sx={{

                  '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
                    color: '#6366f1',
                  },
                  '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
                    color: '#6366f1',
                  },
                }} key={label} MuiSvgIcon-root>
                  <StepLabel >{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you're finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button >Please Click here to Continue</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              
              <div className='mt-5'>
              
                {(() => {
                  if (activeStep == 0) {
                    return  <form className="mt-8 space-y-6" action="#" method="POST"><Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '20%' }} >
                      <div className="grid justify-items-center py-3">
                        <img
                          className=" h-[8rem] w-[8rem] rounded-full border-2 border-indigo-400"
                          src={profileImage}

                          alt=""
                        />
                        {(profileImage != 'https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png') ? (<button className="text-red-600" onClick={() => setprofileImage('https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png')}>Remove</button>) : (<label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" accept='.png,.jpg' className="sr-only" onChange={(e) => { onChangePicture(e, 1) }} />
                        </label>)}

                      </div>
                      <TextField sx={{
                        paddingBottom: '1rem',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#6366f1',
                          },
                          '&:hover fieldset': {
                            borderColor: '#6366f1',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#4f46e5',
                          },
                        },
                        '& label.Mui-focused': {
                          color: '#4f46e5',
                        }
                      }
                      }
                        id="demo-helper-text-misaligned-no-helper" label="First Name"  value={fName} onChange={(text) => { setfName(text.target.value) }} />
                      <TextField sx={{
                        paddingBottom: '1rem',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#6366f1',
                          },
                          '&:hover fieldset': {
                            borderColor: '#6366f1',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#4f46e5',
                          },
                        },
                        '& label.Mui-focused': {
                          color: '#4f46e5',
                        }

                      }} id="demo-helper-text-misaligned-no-helper" label="Last Name"  value={lName} onChange={(text) => { setlName(text.target.value) }} />
                      <LocalizationProvider dateAdapter={AdapterDateFns} >

                        <DatePicker

                          label="Date of Birdth"
                          value={bDate}
                          onChange={(text) => { setbDate(text) }}
                          renderInput={(params) => <TextField sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: '#6366f1',
                              },
                              '&:hover fieldset': {
                                borderColor: '#6366f1',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#4f46e5',
                              },
                            },
                            '& label.Mui-focused': {
                              color: '#4f46e5',
                            }
                          }} {...params} />}
                        />
                      </LocalizationProvider>
                    </Box></form>

                      ;
                  } else if (activeStep == 1) {
                    return <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '20%' }}>
                      <TextField type="email" name="email" sx={{
                        paddingBottom: '1rem',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#6366f1',
                          },
                          '&:hover fieldset': {
                            borderColor: '#6366f1',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#4f46e5',
                          },
                        },
                        '& label.Mui-focused': {
                          color: '#4f46e5',
                        }

                      }} autoComplete="email" label="Email"  value={Email} onChange={(text) => { setEmail(text.target.value) }} />
                      <TextField type="password"
                        sx={{
                          paddingBottom: '1rem',
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#6366f1',
                            },
                            '&:hover fieldset': {
                              borderColor: '#6366f1',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#4f46e5',
                            },
                          },
                          '& label.Mui-focused': {
                            color: '#4f46e5',
                          }

                        }}
                        id="demo-helper-text-misaligned-no-helper" label="Password" value={Password} onChange={(text) => { setPassword(text.target.value) }} />
                      <TextField type="number"
                        sx={{
                          paddingBottom: '1rem',
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#6366f1',
                            },
                            '&:hover fieldset': {
                              borderColor: '#6366f1',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#4f46e5',
                            },
                          },
                          '& label.Mui-focused': {
                            color: '#4f46e5',
                          }

                        }}
                        id="demo-helper-text-misaligned-no-helper" label="CNIC"  value={cnic} onChange={(text) => { setcnic(text.target.value) }} />
                    </Box>
                  } else {
                    return <div>
                      <label className="block text-sm font-medium text-gray-700">Front photo</label>
                      {(frontImage != '') ? (
                        <><div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md" ><img src={frontImage} alt="" /></div><button className="text-red-600" onClick={() => setfrontImage('')}>Remove</button></>) : (<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" accept='.png,.jpg' className="sr-only" onChange={(e) => { onChangePicture(e, 2) }} />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>)}
                      <label className="block text-sm font-medium text-gray-700">Back photo</label>
                      {(backImage != '') ? (
                        <><div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md" ><img src={backImage} alt="" /></div><button className="text-red-600" onClick={() => setbackImage('')}>Remove</button></>) : (<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" accept='.png,.jpg' className="sr-only" onChange={(e) => { onChangePicture(e, 3) }} />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>)}
                    </div>

                      ;
                  }
                })()}
              </div>

              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />


                <Button
                  sx={{ color: '#6366f1', }}
                  onClick={() => { if (activeStep != steps.length - 1) { handleNext() } else { RegisterUser() } }}>
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
                
              </Box>
            
            </React.Fragment>
          )}
        </Box>
      </div>
    </div>

  );
}

export default Register