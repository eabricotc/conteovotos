import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'
import { Materialize } from 'meteor/materialize:materialize';

import { Regiones } from '../../../api/regiones/regiones.js';

import './formcolegios.html';

Template.formcolegios.helpers({
	regiones(){
		let instance = Template.instance();
		if ( instance.subscriptionsReady() ) {
			instance.regiones.set( Regiones.find({}).fetch() );
			return Regiones.find({}).fetch();
		}
	},
	provincias(){
		let instance = Template.instance();
		let provincias;
		if ( instance.regiones.get() != []) {
			_.each(instance.regiones.get(), (x, y) => {
				if ( x._id === instance.region.get() ) {
					instance.cargarP.set(true);
					provincias = x.provincias ;
				}
			});
			instance.provincias.set(provincias);
		}
		if (provincias) {
			return provincias;
		}


		//instance.provincias.set( Regiones.find({_id: instance.region.get()},{fields:{provincias: 1}}).fetch() );
		//return Regiones.find({_id: instance.region.get()},{fields:{provincias: 1}}).fetch();
	},
	comunas(){
		let instance = Template.instance();
		let comuna;
		if ( instance.provincias.get() ) {
			_.each( instance.provincias.get(), (z, y) => {
				if ( z._id === instance.provincia.get() ) {
					instance.cargar.set(true);
					comuna = z.comunas;
				}
			});
		}
		if ( comuna ) {
			return comuna;
		}

	}
});

Template.formcolegios.events({
	'change #selectRegion'(e, t){
		t.region.set( $('#selectRegion').val() );
	},
	'change #selectProvincias'(e, t){
		t.provincia.set( $('#selectProvincias').val() );
	},
	'submit form'(e, t){
		e.preventDefault();
		if ( $('#selectRegion').val() === null || !$('#selectProvincias').val() === null || $('#selectComunas').val() === null || $('#textNombre').val() === '') {
			Materialize.toast('Ingrese datos', 4000);
			return false;
		}
		let idRegion =$('#selectRegion').val() , idProvincia=$('#selectProvincias').val(), idComuna=$('#selectComunas').val(), name=$('#textNombre').val();
		let colegio = { idRegion, idProvincia, idComuna, name }
	},
	'reset form'(e, t){
		console.log('reset form');
		$('select').material_select('destroy');
		t.cargar.set(false);
		t.cargarP.set(false);
		$('select').material_select();
	}
});

Template.formcolegios.onRendered(function ( ){
	this.$('select').material_select();
	this.autorun(() => {

		if ( this.cargar.get() ) {
			setTimeout( ()=> {
				 this.$('#selectComunas').material_select();
				 this.cargar.set(false);
			 }, 1);
		}
		if ( this.cargarP.get() ) {
			setTimeout( ()=> {
				 this.$('#selectProvincias').material_select();
				 this.cargarP.set(false);
			 }, 1);
		}

			this.subscribe('regiones.region',()=>{
				Tracker.afterFlush(function() {
	       this.$('#selectRegion').material_select();
	    	});
			});
	});
});

Template.formcolegios.onCreated(function ( ){
	this.autorun(() => {
		this.region = new ReactiveVar('');
		this.regiones = new ReactiveVar('');
		this.provincia = new ReactiveVar('');
		this.provincias = new ReactiveVar(undefined);
		this.cargar = new ReactiveVar(false);
		this.cargarP = new ReactiveVar(false);

	});
});
