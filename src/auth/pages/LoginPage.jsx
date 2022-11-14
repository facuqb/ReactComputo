
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

// import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as LinkRouter} from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../appJudicial/hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)
  const {onInputChange,usuario} = useForm({usuario : ""})

  const onLogin = (e) =>{
    e.preventDefault()
    if(usuario == "" || usuario == null || usuario.trim(0) < 2) return
    const lastPath = localStorage.getItem('lastpath') || "/"
    login(usuario)
    
    navigate(lastPath,{replace:true})
  
  }
  return (
    <AuthLayout title="Login">

              <form
              onSubmit={onLogin}> 

                <Grid container>
                  <Grid item xs={12} sx={{mt:2}}>
                    <TextField label="Usuario" 
                               type="text" 
                               placeholder="Nombre de Usuario"
                               fullWidth
                               onChange={onInputChange}
                               name="usuario"
                               value={usuario}
                               autoComplete="off"
                               >

                    </TextField>
                  </Grid>
                  {/* <Grid item xs={12} sx={{mt:2}}>
                    <TextField label="Contraseña" 
                               type="password" 
                               placeholder="contraseña"
                               fullWidth>

                    </TextField>
                  </Grid> */}

                  <Grid item xs={12} sx={{mt:2}}>
                  <Button variant="contained"
                              fullWidth
                              onClick={onLogin}
                              >
                              Login
                            </Button>
                  </Grid>

                  {/* <Grid container direction={"row"} justifyContent='end'>
                    <Link component={LinkRouter} color="inherit" to="/auth/register">
                      Crear una cuenta
                    </Link>
                  </Grid> */}

                </Grid>


              </form>

    </AuthLayout>
    


  )

  }


  // return (
    // <div className="container mt-5">
    //   <h1>LoginPage</h1>
    //   <button className="btn btn-outline-primary"
    //   onClick={onLogin}>
    //     Login
    //   </button>
    // </div>
//   )
// }
