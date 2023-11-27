import { ChangeEvent, useEffect, useState } from "react"
import { InputTexto } from "../../Src/Components/InputTexto"
import { InputRadio } from "../../Src/Components/InputRadio"


export function Prova() {

    const [controlCrud, setControlCrud] = useState('1')
    const [idAtualizarDeletar, setIdAtualizarDeletar] = useState("")
    const [labelAtualizarDeletar, setLabelAtualizarDeletar] = useState("")
    const [ocultaLabel, setOcultaLabel] = useState("")
    const [textoPage,setTextoPage] = useState("")

    const [nome, setNome] = useState("")
    const [motivo, setMotivo] = useState("")
    const [dataprova, setDataProva] = useState("")
    const [vencedor, setVencedor] = useState("")

    function SalvarTipoCrud(event: ChangeEvent<HTMLInputElement>) {
        setControlCrud(event.target.value);
    }
    function limparCampos() {
        setNome('')
        setMotivo('')
        setDataProva('')
        setVencedor('')
    }
    useEffect(() => {
        if (controlCrud == "2") {
            setLabelAtualizarDeletar("Id da prova para atualizar")
            setTextoPage("Atualizar")
            setOcultaLabel("")


        } else if (controlCrud == "3") {
            setOcultaLabel("")
            setTextoPage("Delete")
            setLabelAtualizarDeletar("Id da prova para deletar")
        } else {
            setOcultaLabel("d-none")
            setTextoPage("Cadastre")
            setIdAtualizarDeletar('')
        }

    }, [controlCrud])

    const operacaoCRUD = () => {
        const data = {
            "nome": nome,
            "motivo": motivo,
            "data": dataprova,
            "vencedor":vencedor
        }
        console.log(data)

        switch (controlCrud) {
            case "1":
                // ApiController.post("/prova", data).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });

                break;
            case "2":
                //  ApiController.put(`/prova/${idAtualizarDeletar}`, data).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });
                break;
            case "3":
                // ApiController.delete(`/prova/${idAtualizarDeletar}`).then((response) => {
                //     limparCampos()
                // }
                // ).catch((error) => {
                //    console.log(error)
                // });
                break;

        }

    }



    return (
        <form onSubmit={operacaoCRUD}>
            <div className="mb-4">
                <h3>Prova</h3>
                <p>{textoPage} a Prova.</p>
            </div>
            <div className="row">
                <div className="col-12">
                    <InputRadio nomeDoRadio='Tipo de Operação Crud:' valorSelecionado={controlCrud} atualizacaoDeEstado={SalvarTipoCrud} opcoes={[{ valor: "1", label: "Inserir" }, { valor: "2", label: "Atualizar" }, { valor: "3", label: "Deletar" }]} tipo='inline' />
                </div>
                <div className="mb-3 col-6">
                    <InputTexto nomeDoInput="Nome" value={nome} atualizacaoDeEstado={(e) => { setNome(e.target.value) }} />
                </div>
                <div className="mb-3 col-6">
                    <InputTexto nomeDoInput="Data da prova:" value={dataprova} atualizacaoDeEstado={(e) => { setDataProva(e.target.value) }} />
                </div>
            </div>

            <div className="row">
                <div className="mb-3 col-6">
                    <InputTexto nomeDoInput="Vencedor:"value={vencedor} atualizacaoDeEstado={(e) => { setVencedor(e.target.value) }} />
                </div>
            </div>

            <button type="submit" className="btn btn-primary">inserir</button>
        </form>
    )
}