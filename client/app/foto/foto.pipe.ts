import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name : "filtroPorTitulo"})
export class FotoPipe implements PipeTransform
{
    transform(fotos, digitado: string) 
    {
        digitado = digitado.toLocaleLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
    }
}