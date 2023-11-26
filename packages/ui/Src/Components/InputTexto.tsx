import { ChangeEventHandler, ReactNode } from "react"
import "./InputTexto.css"

interface InputProps {
    nomeDoInput?: string
    nome?: string
    tipo?: string
    placeholder?: string
    estilo?: string
    atualizacaoDeEstado?: ChangeEventHandler<HTMLInputElement>
    value?: string
    maxLetras?: number
    id?: string
    required?: boolean
    obrigatorio?: boolean
    desabilitar?: boolean
    submitOcorreu?: any
    mensagemDeErro?: string
    controladorValid?: boolean
    inputStatus?: string
    estiloLabel?: string
}


export const InputTexto = ({ estiloLabel, submitOcorreu, controladorValid, mensagemDeErro, nomeDoInput, placeholder, estilo, atualizacaoDeEstado, nome, tipo, value, maxLetras, required, obrigatorio, desabilitar, inputStatus }: InputProps) => {
    let estrelaObrigatorio: ReactNode;
    let estiloDesabilitado

    if (desabilitar === true) {
        estiloDesabilitado = "disabilitado"
    }

    if (tipo == null) {
        tipo = 'text'
    }
    if (obrigatorio === true) {
        estrelaObrigatorio = (<label className="text-danger">*</label>)
    }


    return (
        <div className={`input-basico-texto ${estilo} input-texto-container mt-2 mb-2 `}>
            <label htmlFor={nome} className={`form-label mb-2 label-input-texto width-100${estiloLabel}`}>{nomeDoInput} {estrelaObrigatorio}</label>
            <input className={`form-control input-texto ${inputStatus} ${estiloDesabilitado} ${submitOcorreu ? (controladorValid ? 'is-valid' : 'is-invalid') : ''}`} disabled={desabilitar} onChange={atualizacaoDeEstado} required={required} value={value} name={nome} type={tipo} placeholder={placeholder} maxLength={maxLetras} />

            {submitOcorreu ? (controladorValid ? ('') : (
                <div className="text-danger">
                    {mensagemDeErro}
                </div>)) : ''}
        </div>
    )
}