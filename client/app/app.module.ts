import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FotoModule } from "./foto/foto.module";
import { HttpModule } from "@angular/http";
import { PainelModule } from "./painel/painel.module";
import { ListagemComponent } from "./listagem/listagem.component"
import { CadastroComponent } from "./cadastro/cadastro.component"
import "rxjs/add/operator/map";


@NgModule({
    imports : [BrowserModule, FotoModule, HttpModule, PainelModule, ListagemComponent, CadastroComponent],
    declarations : [AppComponent],
    bootstrap : [AppComponent]
})
export class AppModule { }