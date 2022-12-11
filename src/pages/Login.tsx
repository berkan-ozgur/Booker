import { Button } from "primereact/button"
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginRequest } from "../models/requests/LoginRequest.interface";
import { Formik } from "formik";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const Login = () => {

    const [checked, setChecked] = useState<boolean>(false);
    const navigate = useNavigate();
    const formValues = { email: "", password: "" } as LoginRequest;

    const loginPass = (values: LoginRequest) => {
        alert(JSON.stringify(values, null, 2));
        if (values) {
            navigate("/");
        }
    }
    function baglan () {
        axios.get("http://localhost:80/bookseller/baglan.php").then(response => {
          return response;
        }).catch(error => {
            return error;
        });
      }
    return (
        <>
            <title>Giriş Yapın</title>
            <Header />
            <>
            <button onClick={baglan}>
                Bağlan
            </button>
            </>
            <div className="d-flex align-items-center justify-content-center mt-5">
                <div className="surface-card p-4 shadow-lg border-round w-50 mb-5" style={{ minWidth: "350px", maxWidth: "700px" }}>
                    <div className="text-center mb-5">
                        <p>LOGO</p>
                        <div style={{ fontSize: "1.75rem", fontWeight: 600 }} className="mb-3">Hoş Geldiniz</div>
                        <span style={{ fontWeight: 500, color: "#495057" }}>Hesabınız yok mu?</span>
                        <Link to="/register" style={{ fontWeight: 500, marginLeft: "10px", color: "#143F6B" }}>Hemen oluşturun!</Link>
                    </div>
                    <div>
                        <Formik
                            initialValues={formValues}
                            validate={(values) => {
                                const errors = {} as LoginRequest;
                                if (!values.email) {
                                    errors.email = '*E-posta adresi zorunlu';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = '*E-posta adresi geçerli değil. Lütfen kontrol ediniz.';
                                }
                                if (!values.password) {
                                    errors.password = "*Şifre zorunlu";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(false);
                                loginPass(values);
                            }}
                        >{({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isValid,
                            dirty,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email" className="d-block mb-2" style={{ fontWeight: 500 }}>E-Posta</label>
                                <InputText id="email" className="w-100 mb-3"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <h6 style={{ color: "red" }}>{errors.email && touched.email && errors.email}</h6>
                                <label htmlFor="password" className="d-block mb-2" style={{ fontWeight: 500 }}>Şifre</label>
                                <InputText id="password" className="w-100 mb-3"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    autoComplete="on"
                                />
                                <h6 style={{ color: "red" }}>{errors.password && touched.password && errors.password}</h6>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <Checkbox inputId="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                                        <label htmlFor="rememberme" style={{ fontFamily: "Inter", color: "#495057", fontSize: "16px", marginLeft: "10px" }}>Beni Hatırla</label>
                                    </div>
                                </div>
                                <Button label="Giriş Yap" icon="pi pi-user" className="w-100" style={{ backgroundColor: "#143F6B", borderColor: "#143F6B" }} disabled={!isValid || !dirty}>
                                </Button>
                            </form>
                        )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login