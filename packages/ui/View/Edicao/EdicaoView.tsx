import { ChangeEvent, useEffect, useState } from "react"
import { InputRadio } from "../../Src/Components/InputRadio"
import { InputTexto } from "../../Src/Components/InputTexto"


export const EdicaoView = () => {
    const [controlCrud, setControlCrud] = useState('1')
    const [idAtualizarDeletar, setIdAtualizarDeletar] = useState("")
    const [labelAtualizarDeletar, setLabelAtualizarDeletar] = useState("")
    const [ocultaLabel, setOcultaLabel] = useState("")
    const [textoPage, setTextoPage] = useState("")

    const [ano, setAno] = useState("")
    const [apresentador, setApresentador] = useState("")
    const [dataInicio, setDataInicio] = useState("")
    const [dataTermino, setDataTermino] = useState("")

    function SalvarTipoCrud(event: ChangeEvent<HTMLInputElement>) {
        setControlCrud(event.target.value);
    }
    function limparCampos() {
        setAno('')
        setApresentador('')
        setDataInicio('')
        setDataTermino('')
    }
    useEffect(() => {
        if (controlCrud == "2") {
            setLabelAtualizarDeletar("Id da Edição para atualizar")
            setOcultaLabel("")
            setTextoPage("Atualizar")


        } else if (controlCrud == "3") {
            setOcultaLabel("")
            setTextoPage("Deletar")
            setLabelAtualizarDeletar("Id da Edição para deletar")
        } else {
            setOcultaLabel("d-none")
            setTextoPage("Cadastrar")
            setIdAtualizarDeletar('')
        }

    }, [controlCrud])

    const operacaoCRUD = () => {
        const data = {
            "ano": ano,
            "apresentador": apresentador,
            "dataInicio": dataInicio,
            "dataTermino": dataTermino,
        }
        console.log(data)

        switch (controlCrud) {
            case "1":
                //  ApiController.post("/edicao_casa", data).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });

                break;
            case "2":
                //  ApiController.put(`/edicao_casa/${idAtualizarDeletar}`, data).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });
                break;
            case "3":
                // ApiController.delete(`/edicao_casa/${idAtualizarDeletar}`).then((response) => {
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
                <h3>Edição</h3>
                <p>{textoPage} a edição.</p>
            </div>
            <div className="row">
                <div className="col-12">
                    <InputRadio nomeDoRadio='Tipo de Operação Crud:' valorSelecionado={controlCrud} atualizacaoDeEstado={SalvarTipoCrud} opcoes={[{ valor: "1", label: "Inserir" }, { valor: "2", label: "Atualizar" }, { valor: "3", label: "Deletar" }]} tipo='inline' />
                </div>

                <div className={`col-12 ${ocultaLabel}`}>
                    <InputTexto nomeDoInput={labelAtualizarDeletar} value={idAtualizarDeletar} atualizacaoDeEstado={(e) => { setIdAtualizarDeletar(e.target.value) }} />
                </div>
                <div className="mb-3 col-6">
                    <InputTexto nomeDoInput={"Ano:"} value={ano} atualizacaoDeEstado={(e) => { setAno(e.target.value) }} />
                </div>
                <div className="mb-3 col-6">
                    <InputTexto nomeDoInput={"Apresentador:"} value={apresentador} atualizacaoDeEstado={(e) => { setApresentador(e.target.value) }} />
                </div>

                <div className="mb-3 col-6">
                    <InputTexto nomeDoInput={"Data de inicio:"} value={dataInicio} atualizacaoDeEstado={(e) => { setDataInicio(e.target.value) }} />
                </div>
                <div className="mb-3 col-6">
                    <InputTexto nomeDoInput={"Data de termino:"} value={dataTermino} atualizacaoDeEstado={(e) => { setDataTermino(e.target.value) }} />
                </div>

                
            </div>
            <button type="submit" className="btn btn-primary">inserir</button>
        </form>
    )

}