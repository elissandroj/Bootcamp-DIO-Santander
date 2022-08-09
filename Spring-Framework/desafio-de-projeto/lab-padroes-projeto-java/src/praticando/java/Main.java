package praticando.java;

import praticando.java.facade.Facade;
import praticando.java.singleton.SingletonEager;
import praticando.java.singleton.SingletonLazy;
import praticando.java.singleton.SingletonLazyHolder;
import praticando.java.strategy.ComportamentoAgressivo;
import praticando.java.strategy.ComportamentoDefensivo;
import praticando.java.strategy.ComportamentoNormal;
import praticando.java.strategy.IComportamento;
import praticando.java.strategy.Robo;

public class Main {

	public static void main(String[] args) {
		
		/* *********************************************** */
		/* Testes relacionados ao Design Pattern Singleton */
		/* *********************************************** */
		
		/*
		 Padr�es de projeto:
		 - Criacionais: ... Singleton;
		 
		 Singleton: O Padr�o Singleton tem como defini��o garantir
		  que uma classe tenha apenas uma inst�ncia de si mesma
		  e que forne�a um ponto global de acesso a ela.
		  Ou seja, uma classe gerencia a pr�pria inst�ncia dela
		  al�m de evitar que qualquer outra classe crie uma inst�ncia dela.
		 */
		
		SingletonLazy lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
		lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);

		SingletonEager eager = SingletonEager.getInstancia();
		System.out.println(eager);
		eager = SingletonEager.getInstancia();
		System.out.println(eager);

		SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstancia();
		System.out.println(lazyHolder);
		lazyHolder = SingletonLazyHolder.getInstancia();
		System.out.println(lazyHolder);
		
		System.out.println();
		System.out.println();
		
		
		
		/* *********************************************** */
		/* Testes relacionados ao Design Pattern Strategy */
		/* *********************************************** */
		
		/*
		 Padr�es de projeto:
		 - Comportamentais: ... Strategy;
		 
		 Strategy: O Strategy � um padr�o de projeto comportamental
		  que transforma um conjunto de comportamentos em objetos
		  e os torna intercambi�veis dentro do objeto de contexto original.
		  O objeto original, chamado contexto, mant�m uma refer�ncia a
		  um objeto strategy e o delega a execu��o do comportamento.
		 */
		
		IComportamento normal = new ComportamentoNormal();
		IComportamento defensivo = new ComportamentoDefensivo();
		IComportamento agressivo= new ComportamentoAgressivo();
		
		Robo robo = new Robo();
		robo.setComportamento(normal);
		
		robo.mover();
		robo.mover();
		
		robo.setComportamento(defensivo);
		
		robo.mover();
		
		robo.setComportamento(agressivo);
		
		robo.mover();
		robo.mover();
		robo.mover();
		
		System.out.println();
		System.out.println();
		
		
		
		/* *********************************************** */
		/* Testes relacionados ao Design Pattern Facade */
		/* *********************************************** */
		
		/*
		 Padr�es de projeto:
		 - Estruturais: ... Facade;
		 
		 Facade: O Facade � um padr�o de projeto estrutural que
		  fornece uma interface simplificada (mas limitada) para
		  um sistema complexo de classes, biblioteca, ou framework.
		  Embora o Facade diminua a complexidade geral do aplicativo,
		  tamb�m ajuda a mover depend�ncias indesejadas para um s� local.
		 */
		
		Facade facade = new Facade();
		facade.migrarCliente("Teste", "14801788");
	}

}
