

export function Prova(){
    return(
        <form >
        <div className="mb-4">
            <h3>Prova</h3>
            <p>Cadastre a Prova.</p>
        </div>
        <div className="row">
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Nome:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Data:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
        </div>

        <div className="row">
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Vencedor:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
        </div>

        <button type="submit" className="btn btn-primary">inserir</button>
    </form> 
    )
}