package praticando.java.singleton;

/*
  Singleton 'pregui�oso'.
  - n�o disponibiliza a inst�ncia para o usu�rio no primeiro momento
*/
public class SingletonLazy {
	
	private static SingletonLazy instancia;
	//Criando inst�ncia dele mesmo (Singleton)

	
	//m�todo privado para garantir que ningu�m vai instanciar ele fora da classe
	private SingletonLazy() {
		super();
	}
	
	//garantindo que a inst�ncia vai ser exposta para quem for chamar
	public static SingletonLazy getInstancia() {
		//		tipo do retorno
		
		if(instancia == null) {
			instancia = new SingletonLazy();
		}
		return instancia;
	}
}
