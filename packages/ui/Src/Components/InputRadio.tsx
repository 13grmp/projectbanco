import { ChangeEvent, ReactNode } from "react";
import './inputRadio.css'

interface InputRadioProps {
    nomeDoRadio?: string;
    opcoes: { valor: string | number; label: string }[];
    valorSelecionado: string;
    atualizacaoDeEstado?: (event: ChangeEvent<HTMLInputElement>) => void;
    tipo: string
    onclick?: any
    obrigatorio?: boolean
    classeLabel?: string
    divRadio?: string
    desabilitar?: boolean
    submitOcorreu?: boolean
    mensagemDeErro?: string
    estilo?: string
    controladorValid?: boolean
}

export const InputRadio = ({ submitOcorreu, mensagemDeErro, controladorValid, divRadio, classeLabel, nomeDoRadio, opcoes, valorSelecionado, desabilitar, atualizacaoDeEstado, tipo, obrigatorio }: InputRadioProps) => {
    let estrelaObrigatorio: ReactNode;
    let estiloDesabilitado

    if (desabilitar === true) {
        estiloDesabilitado = "disabilitado"
    }
    if (obrigatorio === true) {
        estrelaObrigatorio = (<label className="text-danger">*</label>)
    }

    function controladorInputRadio() {
        if (tipo === "inline") {
            return (
                <div className="form-check-inline form-radio-primary mb-2 mt-2">
                    <label 
                        htmlFor="formradioRight5" 
                        className={`form-check-label ${classeLabel}`}>
                            {nomeDoRadio} {estrelaObrigatorio}
                    </label>
                    <div className={`flex  flex-col sm:flex-row  ${divRadio}`}>
                        {opcoes.map((opcao, index) => (
                            <div key={`${index}-${opcao.valor}`} className="   form-check-inline mt-2">
                                <input 
                                    id={`radio-input-${nomeDoRadio}-${opcao.valor}`} 
                                    disabled={desabilitar} 
                                    className={`form-check-input ml-2 ${submitOcorreu ? (controladorValid ? 'is-valid' : 'is-invalid') : ''}`}
                                    type="radio" 
                                    name={`${nomeDoRadio}-${opcao.valor}`} 
                                    value={opcao.valor} checked={valorSelecionado === opcao.valor} 
                                    onChange={atualizacaoDeEstado} />
                                <label 
                                    className={`form-check-label meu-label  mr-5 ${submitOcorreu ? (controladorValid ? 'is-valid' : 'is-invalid') : ''}`} 
                                    htmlFor={`radio-input-${nomeDoRadio}-${opcao.valor}`} 
                                    id={`radio-label-${opcao.valor}-${index}`}>
                                        {opcao.label}
                                </label>
                            </div>
                        ))}
                    </div>
                    {submitOcorreu ? (controladorValid ? ('') : (  
                        <div className="text-danger">
                        {mensagemDeErro}
                    </div>)) : ''}
                </div>
            );
        } else if (tipo === "block") {
            return (
                <div className="form-check-block form-radio mb-3">
                    <label 
                        htmlFor="formradioRight5" 
                        // htmlFor="input-basico" 
                        className={`label-nome ${classeLabel}`}>
                        {nomeDoRadio} {estrelaObrigatorio}
                    </label>
                    {opcoes.map((opcao, index) => (
                        <div key={`${index}-${opcao.valor}`} className="form-check-block mt-2">
                            <input 
                                id={`radio-input-${nomeDoRadio}-${opcao.valor}$`} 
                                disabled={desabilitar} 
                                className={`form-check-input ${submitOcorreu ? (controladorValid ? 'is-valid' : 'is-invalid') : ''}`}
                                type="radio"
                                name={`${nomeDoRadio}-${opcao.valor}`} 
                                value={opcao.valor} checked={valorSelecionado === opcao.valor} 
                                onChange={atualizacaoDeEstado} />
                            <label 
                                className={`form-check-label meu-label  mr-5 ${submitOcorreu ? (controladorValid ? 'is-valid' : 'is-invalid') : ''}`}
                                htmlFor="formradioRight5" 
                                id={`radio-label-${opcao.valor}-${index}`}>
                                    {opcao.label}
                            </label>
                        </div>
                    ))}
                    {submitOcorreu ? (controladorValid ? ('') : (  
                        <div className="text-danger">
                        {mensagemDeErro}
                    </div>)) : ''}
                </div>
            );
        }
    }
    return (
        <div>
            {controladorInputRadio()}
        </div>
    );
};

