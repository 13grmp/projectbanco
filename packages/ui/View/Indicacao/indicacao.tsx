import { ChangeEvent, useEffect, useState } from "react";
import { InputRadio } from "../../Src/Components/InputRadio";
import { InputTexto } from "../../Src/Components/InputTexto";
import { ApiController } from "../../Src/commons/ApiControler";


export function Indicacao() {
    const [controlCrud, setControlCrud] = useState('1')
    const [idAtualizarDeletar, setIdAtualizarDeletar] = useState("")
    const [labelAtualizarDeletar, setLabelAtualizarDeletar] = useState("")
    const [ocultaLabel, setOcultaLabel] = useState("")
    const [textoPage, setTextoPage] = useState("")

    const [nome, setNome] = useState("")
    const [motivo, setMotivo] = useState("")
    const [dataEliminacao, setData] = useState("")

    function SalvarTipoCrud(event: ChangeEvent<HTMLInputElement>) {
        setControlCrud(event.target.value);
    }
    function limparCampos() {
        setNome('')
        setMotivo('')
        setData('')
    }
    useEffect(() => {
        if (controlCrud == "2") {
            setLabelAtualizarDeletar("Id da eliminação para atualizar")
            setOcultaLabel("")
            setTextoPage("Atualizar")


        } else if (controlCrud == "3") {
            setOcultaLabel("")
            setTextoPage("Deletar")
            setLabelAtualizarDeletar("Id da eliminação para deletar")
        } else {
            setOcultaLabel("d-none")
            setTextoPage("Cadastrar")
            setIdAtualizarDeletar('')
        }

    }, [controlCrud])

    const operacaoCRUD = () => {
        const data = {
            "nome": nome,
            "motivo": motivo,
            "data": dataEliminacao,
        }
        console.log(data)

        switch (controlCrud) {
            case "1":
                //  ApiController.post("/eliminacao", data).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });

                break;
            case "2":
                //  ApiController.put(`/eliminacao/${idAtualizarDeletar}`, data).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });
                break;
            case "3":
                // ApiController.delete(`/eliminacao/${idAtualizarDeletar}`).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });
                break;

        }

    }

    return (
        <form onSubmit={operacaoCRUD} >
            <div className="mb-4">
                <h3>Evento Especial</h3>
                <p>{textoPage} o Evento especial.</p>
            </div>
            <div className="row">
                <div className="col-12">
                    <InputRadio nomeDoRadio='Tipo de Operação Crud:' valorSelecionado={controlCrud} atualizacaoDeEstado={SalvarTipoCrud} opcoes={[{ valor: "1", label: "Inserir" }, { valor: "2", label: "Atualizar" }, { valor: "3", label: "Deletar" }]} tipo='inline' />
                </div>
                <div className={`col-6 ${ocultaLabel}`}>
                    <InputTexto nomeDoInput={labelAtualizarDeletar} value={idAtualizarDeletar} atualizacaoDeEstado={(e) => { setIdAtualizarDeletar(e.target.value) }} />
                </div>
                <div className="mb-3 col-6">
                    <InputTexto nomeDoInput={"iD participante votando:"} value={nome} atualizacaoDeEstado={(e) => { setNome(e.target.value) }} />
                </div>
                <div className="mb-3 col-6">
                    <InputTexto nomeDoInput={"iD participante votado:"} value={motivo} atualizacaoDeEstado={(e) => { setMotivo(e.target.value) }} />

                </div>
                <div className="mb-3 col-6">
                    <InputTexto nomeDoInput={"Data:"} value={dataEliminacao} atualizacaoDeEstado={(e) => { setData(e.target.value) }} tipo="date"/>
                </div>
            </div>


            <button type="submit" className="btn btn-primary">inserir</button>
        </form>
    )
}