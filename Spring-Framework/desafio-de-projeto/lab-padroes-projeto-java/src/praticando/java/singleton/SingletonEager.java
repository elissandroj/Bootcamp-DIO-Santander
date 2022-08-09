package praticando.java.singleton;

/*
  Singleton 'apressado'.
  - no momento em que a classe for acionada, ela vai ser� retornada
*/
public class SingletonEager {
	
	private static SingletonEager instancia = new SingletonEager();
	//Criando inst�ncia dele mesmo (Singleton)

	
	//m�todo privado para garantir que ningu�m vai instanciar ele fora da classe
	private SingletonEager() {
		super();
	}
	
	//garantindo que a inst�ncia vai ser exposta para quem for chamar
	public static SingletonEager getInstancia() {
		//		tipo do retorno
		
		return instancia;
	}
}
