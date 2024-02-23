import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Angular éAngular é baum',
      autoria:'vit',
      modelo:'modelo1'
    },
    {
      conteudo: 'Angular é br é baumAngular é baum',
      autoria:'vit 2',
      modelo:'modelo2'
    },
    {
      conteudo: 'Duis a rhoncus massa. Ut nec consectetur nibh. Nunc venenatis ante quis molestie efficitur. In dapibus felis eu augue porta, ac semper augue lobortis. Morbi erat nisl, pellentesque vitae erat a, rhoncus vestibulum sem. Phasellus quis orci semper, suscipit lorem et, tincidunt ex. Vivamus auctor viverra nisl, vel pellentesque quam pellentesque vitae. Curabitur ac purus fringilla, commodo dolor ac, placerat massa. Proin nec aliquet ligula. Aenean tincidunt nisi ut eros lobortis, in pharetra turpis finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sed ligula nec odio auctor faucibus. Nam urna eros, consectetur ut eleifend quis, semper varius tellus. Nullam id turpis dapibus, tempus quam ut, accumsan quam. Etiam et tortor tincidunt, tempor turpis eget, pharetra dolor.',
      autoria:'vit 2',
      modelo:'modelo2'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
