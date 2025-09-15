/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburguer {
  prepare(): void
}

class ChickenHamburguer implements Hamburguer {
  prepare(): void {
    console.log("Preparando hamburguesa de pollo")
  }
}
class BeefHamburguer implements Hamburguer {
  prepare(): void {
    console.log("Preparando hamburguesa de carne")
  }
}

class BeanBurger implements Hamburguer {
  prepare(): void {
    console.log("Preparando hamburguesa de frijoles")
  }
}

abstract class Restaurant {
  protected abstract createHamburguer(): Hamburguer
  orderHamburguer(): void {
    const hamburguer = this.createHamburguer()
    hamburguer.prepare()
  }
}

class DonBigotonRestaurant extends Restaurant {
  override createHamburguer(): Hamburguer {
    return new ChickenHamburguer()
  }
}

class BifeDeLaVacaRestaurant extends Restaurant {
  override createHamburguer(): Hamburguer {
    return new BeefHamburguer()
  }
}

class DonFrijolRestaurant extends Restaurant {
  override createHamburguer(): Hamburguer {
    return new BeanBurger()
  }
}

function main() {
  let restaurant: Restaurant

  const burgerType = prompt(
    "¿Qué tipo de hamburguesa deseas? (pollo/carne/frijol)"
  )
  switch (burgerType) {
    case "pollo":
      restaurant = new DonBigotonRestaurant()
      break
    case "carne":
      restaurant = new BifeDeLaVacaRestaurant()
      break
    case "frijol":
      restaurant = new DonFrijolRestaurant()
      break
    default:
      throw new Error("Tipo de hamburguesa no válido")
  }

  restaurant.orderHamburguer()
}

main()
