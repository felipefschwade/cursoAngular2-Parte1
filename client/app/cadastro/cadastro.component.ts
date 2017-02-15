import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";

@Component({
    moduleId : module.id,
    selector : "cadastro",
    templateUrl : "./cadastro.component.html" 
})
export class CadastroComponent { 

    foto: FotoComponent = new FotoComponent();
    htpp: Http;

    constructor(http: Http)
    {
        this.htpp = http;
    }

    cadastrar(event: Event)
    {
        event.preventDefault();
        let headers = new Headers({'Content-Type' : 'application/json'});
        this.htpp.post("v1/fotos", JSON.stringify(this.foto), {headers : headers})
        .subscribe(() => console.log("Imagem Salva Com Sucesso"),
        error => console.log(error));
        this.foto = new FotoComponent();
    }

}