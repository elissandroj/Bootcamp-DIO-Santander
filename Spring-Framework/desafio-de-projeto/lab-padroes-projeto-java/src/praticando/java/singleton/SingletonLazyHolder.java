package praticando.java.singleton;

/*
  Singleton Lazy Holder.
*/
public class SingletonLazyHolder {
	
	private static class InstanceHolder{
		//Encapsulando a instancia em uma classe interna estatica (Holder)
		public static SingletonLazyHolder instancia = new SingletonLazyHolder();	
	}
	
	//m�todo privado para garantir que ningu�m vai instanciar ele fora da classe
	private SingletonLazyHolder() {
		super();
	}
	
	//garantindo que a inst�ncia vai ser exposta para quem for chamar
	public static SingletonLazyHolder getInstancia() {
		return InstanceHolder.instancia;
	}
}
