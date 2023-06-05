import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Register.module.css";
import { useEffect, useState } from "react";


export const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error : authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {

      const user = {
        displayName,
        email,
        password,
      }
  
      if (password !== confirmedPassword) {
        setError("As senhas precisam ser iguais.");
        return
      }
      const init = await createUser(user)

      console.log(user)
      console.log(init)

    } catch (error) {
      console.log(error)
      setError("Ocorreu um erro durante o cadastro.");
    } 
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])


  return (
    <>
     <div className={styles.register}>
      <h1>Cadastre-se</h1>
      <p>E teste seus conhecimentos!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input
            type="text"
            name="displayName"
            placeholder="Nome"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            required
          />
        </label>

        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>

        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmedPassword"
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmedPassword(e.target.value)}
            value={confirmedPassword}
            required
          />
        </label>

       {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
    </>
   
  );
};
