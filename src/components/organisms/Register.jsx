import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import api from "../helpers/api";

import Sucess from "../molecules/Sucess";
import Failure from "../molecules/Failure";

export default function Register() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordInputRefConfirm = useRef();
  const [registerSucess, SetRegisterSucess] = useState(false);
  const [resposta, setResposta] = useState([]);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //setIsLoading(true);

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const passwordConfirm = passwordInputRefConfirm.current.value;

    if (password !== passwordConfirm) {
      alert("Senhas não conferem");
    } else {
      const data = await api
        .post("/users/", {
          name: email,
          email: email,
          password: password,
        })
        .then((response) => {
          setResposta(response.data);
          alert("Conta Criada, realize login para continuar");
          navigate("/login");
        })
        .catch((err) => {
          console.log("ops, ocorreu um erro! " + err);
          alert("Erro ao cadastrar: " + err.response.data.message);
        });
    }
  };

  // useEffect(() => {
  //   handleFormSubmit;
  // }, []);

  //console.log(resposta);

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   //setIsLoading(true);

  //   const email = emailInputRef.current.value;
  //   const password = passwordInputRef.current.value;
  //   const passwordConfirm = passwordInputRefConfirm.current.value;

  //   if (password !== passwordConfirm) {
  //     alert("Senhas não conferem");
  //   } else {
  //     fetch("https://apitera-lealmax.vercel.app/api/users/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: email,
  //         email: email,
  //         password: password,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.message !== "Erro ao criar usuário.") {
  //           if (data.name !== null) {
  //             console.log(data);
  //             SetRegisterSucess(true);
  //             alert("Cadastro realizado");
  //             setResposta(data);
  //             console.log(resposta);
  //           }

  //           //va para a rota x
  //         } else {
  //           alert(data.error);
  //           console.log(data);
  //         }
  //       });
  //     console.log(resposta);
  //   }
  // };

  // async function handleLoginForm() {
  //   SetRegisterSucess(false);
  //   setResposta([]);
  //   const email = emailInputRef.current.value;
  //   const password = passwordInputRef.current.value;
  //   const passwordConfirm = passwordInputRefConfirm.current.value;
  //   //const hashedPassword = bcrypt.hashSync(password, salt); // hash created previously created upon sign up

  //   if (password !== passwordConfirm) {
  //     alert("Senhas não conferem");
  //   } else {
  //     //createUserApi(email, email, password);
  //     fetch("https://apitera-lealmax.vercel.app/api/users/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: email,
  //         email: email,
  //         password: password,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.message !== "Erro ao criar usuário.") {
  //           if (data.name !== null) {
  //             console.log(data.message);
  //             SetRegisterSucess(true);
  //             alert("Cadastro realizado");
  //             setResposta(data);
  //             console.log(resposta);
  //           }

  //           //va para a rota x
  //         } else {
  //           alert(data.error);
  //         }
  //       });
  //   }
  // }

  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-12 mb-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mx-auto w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Registre-se
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                ref={emailInputRef}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                ref={passwordInputRef}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirme sua Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                id="passwordconfirm"
                name="password"
                type="password"
                autoComplete="current-password"
                ref={passwordInputRefConfirm}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleFormSubmit}
            >
              Crie uma conta
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Já é membro?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
