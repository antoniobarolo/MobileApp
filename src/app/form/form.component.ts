import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Options } from 'selenium-webdriver';

const URL = "http://universities.hipolabs.com/search?";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit {
  uni: any;
  nome = "";
  pais = "";
  constructor(private http: HttpClient) { }
  ngOnInit() { }

  Pesquisar() {
      this.http.get("http://universities.hipolabs.com/search?name="+this.nome+"&country="+this.pais).subscribe((response) => {
      console.log(response);
      this.uni = response
      });

  }
}