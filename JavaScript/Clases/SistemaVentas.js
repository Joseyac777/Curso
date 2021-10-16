class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get IdProducto(){
        return this._idProducto;
    }

    get Nombre(){
        return this._nombre;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }

    get Precio(){
        return this._precio;
    }
    
    set Precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `\nidProducto: ${this._idProducto}
            nombre: ${this._nombre}
            precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    } 

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    AgregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){ // OF nos permite entrar alos elementos y metodos de un objeto
            totalVenta += producto.Precio; // Este Precio es el get de la clase Persona se llama mediante el objeto 
        }                                  // Que se recive mediante _producto 
        return totalVenta;
    }

    MostrarOrden(){
        let productosOrden = '';
        for( let producto of this._productos){
            productosOrden +=  producto.toString();
        }

        console.log(`Orden: ${this._idOrden}
        Total: $${this.calcularTotal()}
        Productos: ${productosOrden}`);
    }

}

let Producto1 = new Producto('Playera',200);

let Producto2 = new Producto('Pantalon',300);

let Producto3 = new Producto('Cinturon',50);

let Orden1 = new Orden();

Orden1.AgregarProducto(Producto1);
Orden1.AgregarProducto(Producto2);
Orden1.AgregarProducto(Producto3);

Orden1.MostrarOrden();

let Producto4 = new Producto('Chaqueta',350);

let Orden2 = new Orden();

Orden2.AgregarProducto(Producto4);

Orden2.MostrarOrden();