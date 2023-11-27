import { ChangeEvent, useEffect, useState } from "react";
import { InputTexto } from "../../Src/Components/InputTexto";
import { InputRadio } from "../../Src/Components/InputRadio";
import { ApiController } from "../../Src/commons/ApiControler";


export function Participante() {


    const [controlCrud,setControlCrud] = useState('1')
    const [idAtualizarDeletar,setIdAtualizarDeletar] = useState("")
    const [labelAtualizarDeletar,setLabelAtualizarDeletar] = useState("")
    const [ocultaLabel,setOcultaLabel] = useState("")
    const [textoPage,setTextoPage] = useState("")


    const [nome,setNome] = useState("")
    const [idade,setIdade] = useState("")
    const [genero,setGenero] = useState("")
    const [rua,setRua] = useState("")
    const [cidade,setCidade] = useState("")
    const [estado,setEstado] = useState("")
    const [telefone,setTelefone] = useState("")
    const [numero,setNumero] = useState("")
    const [email,setEmail] = useState("")
    const [tipoParticipante,setTipoParticipante] = useState("")

    function SalvarTipoCrud(event: ChangeEvent<HTMLInputElement>) {
        setControlCrud(event.target.value);
    }
    function limparCampos(){
        setNome("")
        setIdade("")
        setGenero("")
        setRua("")
        setCidade("")
        setEstado("")
        setTelefone("")
        setNumero("")
        setEmail("")
        setTipoParticipante("")
    }

    useEffect(()=>{

        if(controlCrud == "2"){
            setLabelAtualizarDeletar("Id de participante para atualizar")
            setOcultaLabel("")
            setTextoPage("Atualizar")

        }else if (controlCrud =="3"){
            setOcultaLabel("")
            setTextoPage("Delete")
            setLabelAtualizarDeletar("Id de participante para deletar")
        }else{
            setOcultaLabel("d-none")
            setTextoPage("Cadastre")
            setIdAtualizarDeletar('')
        }

    },[controlCrud])

    const operacaoCRUD = () =>{
       const data = {
        "cidade" : cidade ,
        "email": email,
        "estado": estado,
        "genero": genero,
        "idade": idade,
        "nome": nome ,
        "numero": numero,
        "rua": rua,
        "telefone": telefone ,
        "tipo_participante": tipoParticipante
       }
       console.log(data)

        switch(controlCrud){
            case "1":
                // ApiController.post("/participante", data).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });
      
                break;
            case "2":
                //  ApiController.put(`/participante/${idAtualizarDeletar}`, data).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });
                break;
            case "3":
                // ApiController.delete(`/participante/${idAtualizarDeletar}`).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });
                break;
            
        }

    }

    return (
        <>
            <form onSubmit={operacaoCRUD}>
                <div className="mb-4">
                    <h3>Participante</h3>
                    <p>{textoPage} o participante.</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <InputRadio nomeDoRadio='Tipo de Operação Crud:'  valorSelecionado={controlCrud}  atualizacaoDeEstado={SalvarTipoCrud} opcoes={[{ valor: "1", label: "Inserir" }, { valor: "2", label: "Atualizar" },{ valor: "3", label: "Deletar" }]} tipo='inline' />
                    </div>
                </div>
                <div className="row">
                    <div className={`col-12 ${ocultaLabel}`}>
                        <InputTexto nomeDoInput={labelAtualizarDeletar} value={idAtualizarDeletar} atualizacaoDeEstado={(e) => {setIdAtualizarDeletar(e.target.value)}}/>
                    </div>
                    <div className="mb-3 col-6">
                        <InputTexto nomeDoInput="Nome:" value={nome} atualizacaoDeEstado={(e) => {setNome(e.target.value)}}/>
                    </div>
                    <div className="mb-3 col-6">
                        <InputTexto nomeDoInput="Idade:" value={idade} atualizacaoDeEstado={(e) => {setIdade(e.target.value)}} />
                    </div>
                </div>

                <div className="row">
                    <div className="mb-3 col-6">
                        <InputTexto nomeDoInput="Genero:" value={genero} atualizacaoDeEstado={(e) => {setGenero(e.target.value)}}/>

                    </div>
                    <div className="mb-3 col-6">
                        <InputTexto nomeDoInput="Rua:" value={rua} atualizacaoDeEstado={(e) => {setRua(e.target.value)}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-6">
                        <InputTexto nomeDoInput="Cidade:" value={cidade} atualizacaoDeEstado={(e) => {setCidade(e.target.value)}} />
                    </div>
                    <div className="mb-3 col-6">
                        <InputTexto nomeDoInput="Número:" value={numero} atualizacaoDeEstado={(e) => {setNumero(e.target.value)}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-6">
                        <InputTexto nomeDoInput="Estado:" value={estado} atualizacaoDeEstado={(e) => {setEstado(e.target.value)}}/>
                    </div>
                    <div className="mb-3 col-6">
                        <InputTexto nomeDoInput="Telefone:" value={telefone} atualizacaoDeEstado={(e) => {setTelefone(e.target.value)}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-6">
                        <InputTexto nomeDoInput="Email:" value={email} atualizacaoDeEstado={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3 col-6">
                        <InputTexto nomeDoInput="Tipo participante:" value={tipoParticipante} atualizacaoDeEstado={(e) => {setTipoParticipante(e.target.value)}}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">inserir</button>
            </form>
        </>
    )
}