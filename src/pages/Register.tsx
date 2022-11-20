import { RegisterRequest } from "../models/requests/RegisterRequest.interface";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Button, Checkbox, InputNumber, InputText } from "primereact";
import { useState } from "react";

const Register = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const formValues = {
    name: "",
    surname: "",
    email: "",
   phoneNumber : "",
    password: "",
    confirmPassword: "",
  } as RegisterRequest;
  const navigate = useNavigate();

  const loginPass = (values: RegisterRequest) => {
    if (values.confirmPassword === values.password) {
      alert(JSON.stringify(values, null, 2));
      if (values) {
        navigate("/login");
      }
    } else {
      alert("Passwors are not matched");
      values.password = "";
      values.confirmPassword = "";
      return;
    }
  };

  return (
    <>
      <title>Kayıt Ol</title>
      <Header />
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div
          className="surface-card p-4 shadow-lg border-round w-50 mb-5"
          style={{ minWidth: "500px", maxWidth: "700px" }}
        >
          <div className="text-center mb-5">
            <p>LOGO</p>
            <div
              style={{ fontSize: "1.75rem", fontWeight: 600 }}
              className="mb-3"
            >
              Kayıt Ol
            </div>
            <span style={{ fontWeight: 500, color: "#495057" }}>
              Hesabınız var mı?
            </span>
            <Link
              to="/login"
              style={{ fontWeight: 500, marginLeft: "10px", color: "#143F6B" }}
            >
              Hemen giriş yap!
            </Link>
          </div>
          <div>
            <Formik
              initialValues={formValues}
              validate={(values) => {
                const errors = {} as RegisterRequest;
                if (!values.name) {
                  errors.name = "*Bu alan boş bırakılamaz!";
                } else if (values.name.length > 20) {
                  errors.name = "*Adınız 20 karakter veya daha az olmalıdır!";
                }
                if (!values.surname) {
                  errors.surname = "*Bu alan boş bırakılamaz!";
                } else if (values.surname.length > 20) {
                  errors.surname =
                    "*Soyadınız 20 karakter veya daha az olmalıdır!";
                }
                if (!values.email) {
                  errors.email = "*Bu alan boş bırakılamaz!";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email =
                    "*E-posta adresi geçerli değil. Lütfen kontrol ediniz.";
                }
                // if (!values.phoneNumber) {
                //   errors.phoneNumber = "*Bu alan boş bırakılamaz!";
                // } else if (
                //   !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(
                //     values.phoneNumber
                //   )
                // ) {
                //   errors.phoneNumber =
                //     "Lütfen geçerli bir telefon numarası giriniz.";
                // }
                if (!values.password) {
                  errors.password = "*Bu alan boş bırakılamaz!";
                }
                if (values.password !== values.confirmPassword) {
                  errors.password = "Parola eşleşmiyor. Lütfen kontrol ediniz.";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                loginPass(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
                dirty,
              }) => (
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="name"
                    className="d-block mb-2"
                    style={{ fontWeight: 500 }}
                  >
                    Adınız
                  </label>
                  <InputText
                    id="name"
                    className="w-100 mb-3"
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  ></InputText>
                  <h6 style={{ color: "red" }}>
                    {errors.name && touched.name && errors.name}
                  </h6>
                  <label
                    htmlFor="surname"
                    className="d-block mb-2"
                    style={{ fontWeight: 500 }}
                  >
                    Soyadınız
                  </label>
                  <InputText
                    id="surname"
                    className="w-100 mb-3"
                    type="surname"
                    name="surname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                  ></InputText>
                  <h6 style={{ color: "red" }}>
                    {errors.surname && touched.surname && errors.surname}
                  </h6>
                  <label
                    htmlFor="email"
                    className="d-block mb-2"
                    style={{ fontWeight: 500 }}
                  >
                    E-Posta
                  </label>
                  <InputText
                    id="email"
                    className="w-100 mb-3"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <h6 style={{ color: "red" }}>
                    {errors.email && touched.email && errors.email}
                  </h6>
                  {/* <label
                    htmlFor="phoneNumber"
                    className="d-block mb-2"
                    style={{ fontWeight: 500 }}
                  >
                    Telefon Numarası
                  </label>
                  <InputNumber
                    id="phoneNumber"
                    className="w-100 mb-3"
                    type="phoneNumber"
                    name="phoneNuber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                  />
                  <h6 style={{ color: "red" }}>
                    {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                  </h6> */}
                  <label
                    htmlFor="password"
                    className="d-block mb-2"
                    style={{ fontWeight: 500 }}
                  >
                    Şifre
                  </label>
                  <InputText
                    id="password"
                    className="w-100 mb-3"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    autoComplete="on"
                  />
                  <h6 style={{ color: "red" }}>
                    {errors.password && touched.password && errors.password}
                  </h6>
                  <label
                    htmlFor="password"
                    className="d-block mb-2"
                    style={{ fontWeight: 500 }}
                  >
                    Şifre Tekrar
                  </label>
                  <InputText
                    id="confirmPassword"
                    className="w-100 mb-3"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    autoComplete="on"
                  />
                  <h6 style={{ color: "red" }}>
                    {errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword}
                  </h6>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <Checkbox
                        inputId="agreement"
                        onChange={(e) => setChecked(e.checked)}
                        checked={checked}
                        className="mr-2"
                      />
                      <label
                        htmlFor="agreement"
                        style={{
                          fontFamily: "Inter",
                          color: "#495057",
                          fontSize: "16px",
                          marginLeft: "10px",
                        }}
                      >
                        <Link
                          to="#"
                          style={{
                            fontWeight: 500,
                            marginLeft: "10px",
                            color: "#143F6B",
                          }}
                        >
                          Üyelik Sözleşmesi
                        </Link>{" "}
                        şartlarını okudum kabul ediyorum.
                      </label>
                    </div>
                  </div>
                  <Button
                    label="Kayıt Ol"
                    icon="pi pi-check"
                    className="w-100"
                    style={{
                      backgroundColor: "#143F6B",
                      borderColor: "#143F6B",
                    }}
                    disabled={!isValid || !checked || !dirty}
                  ></Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
