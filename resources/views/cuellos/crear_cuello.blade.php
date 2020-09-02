@extends('layouts.App_ladys')

@section('content')
    <div class=" container bg-white container_principal">

        <div class="w-65 mb-4">
            <div class="row">
                <h4 class="my-5">Nuevo diseño</h4>
            </div>
            <div class="boder_radius row">
                <div class="d-flex w-50 flex-column p-3 w-md-80">
                    <div>
                        <div class="form-group">
                            <label for="nombre_cuello">Nombre de Diseño</label>
                            <input class="form-control" type="text" name="nombre" id="nombre_cuello" required>
                        </div>
                        <div class="form-group">
                            <label for="descripcion_cuello">Descripción</label>
                            <input class="form-control" type="text" name="descripcion" id="descripcion_cuello">
                        </div>
                    </div>
                </div>
                <div class="d-flex w-50 flex-column p-3 w-md-80">
                    <div>
                        <label for="imagen_diseño">Imagen del diseño</label>
                        <input class="w-100" type="file" name="" id="imagen_diseno">
                    </div>
                    <div class="my-4">                             
                        <label for="">Tipo de cuello</label>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex align-items-center">
                                <label for="cuello_liso_id" class="m-0" >Liso</label>
                                <input  class="ml-1" type="checkbox" name="cuello_liso" value="1" id="cuello_liso_id">
                            </div>
                            <div class="d-flex align-items-center">
                                <label for="cuello_letra_id" class="m-0">Letras</label>
                                <input class="ml-1 combinacion" type="checkbox" name="cuello_letras" value="3" id="cuello_letra_id">
                            </div>
                            <div class="d-flex align-items-center">
                                <label for="cuello_figura_id" class="m-0">Figuras</label>
                                <input class="ml-1 combinacion" type="checkbox" name="cuello_figuras" value="4  " id="cuello_figura_id">
                            </div>
                            <div class="d-flex align-items-center">
                                <label for="cuello_lineas_id" class="m-0">Lineas</label>
                                <input class="ml-1 combinacion" type="checkbox" name="cuello_lineas" value="2" id="cuello_lineas_id">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="aviso" class="row my-2">
                
            </div>
            <div class="row my-4">
                <button id="mostrar_formulario" class="btn btn-primary" >Continuar</button>
            </div>
        </div>


        <!-- Formulario de diseño con lineas-->
        <div id="formulario_cuello_lineas" class="container my-5 hiden animacion">
            <div class="row">
                <h4 class="my-5">Detalles del Diseño con lienas</h4>
            </div>
            <div class="boder_radius row">
                <div class="d-flex w-50 flex-column px-3">
                    <div class="p-3">
                        <div class="form-group">
                            <label for="material_fondo_linea">Material de fondo</label>
                            <select class="form-control " name="material_fondo" id="material_fondo_linea">
                                <option value="" selected disabled>Escoger Material</option>
                                @foreach ($materiales as $material)                            
                                    <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="material_linea">Material de linea</label>
                            <select class="form-control " name="material_linea" id="material_linea">
                                <option value="" selected disabled>Escoger Material</option>
                                @foreach ($materiales as $material)                            
                                    <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
                <div class="d-flex w-50 flex-column px-3">
                    <div class="p-3">
                        <div class="form-group">
                            <label for="color_fondo_linea">Color de fondo</label>
                            <input class="form-control tamano_input_color" type="color" name="" id="color_fondo_linea">
                        </div> 
                        <div class="row  mx-0">
                            <div class="form-group">
                                <label for="grosor_linea">Grosor de linea</label>
                                <input class="form-control tamano_input_color" type="number" name="" id="grosor_linea">
                            </div> 
                            <div class="form-group mx-3">
                                <label for="imagen_diseño">Color de linea</label>
                                <input class="form-control tamano_input_color" type="color" name="" id="color_linea">
                            </div>   
                        </div>  
                        <div id="aviso_linea" class="row my-2">
            
                        </div>                
                    </div>
                </div>
                <div class=" row my-3 mx-4" >
                    <button class="btn btn-primary" onclick="tabla_cuello_linea();"> Agregar</button>                 
                </div>
            </div>
            <div id="tabla_diseno_lineas"  class="my-3 w-60 hiden animacion">
                <h4> Resumen del diseño</h4>
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>    
                            <th>Orden</th>
                            <th>Material</th>
                            <th>Color</th>
                            <th>Grosor</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_linea">
                        
                    </tbody>
                </table>
                <div class=" row my-3 mx-1">                    
                    <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>    
                </div>                 
            </div>
        </div>

        <!-- Formulario de diseño con letras-->
        <div id="formulario_cuello_letras" class="container my-5 hiden animacion ">
            <div class="row">
                <h4 class="my-5">Detalles del Diseño con letras</h4>
            </div>
            <div class="boder_radius row">
                <div class="d-flex w-50 flex-column px-3">
                    <div class="p-3">
                        <div class="form-group">
                            <label for="">Material de fondo</label>
                            <select class="form-control" name="material_fondo_letra" id="material_fondo_letra">
                                <option value="" selected disabled>Escoger Material</option>
                                @foreach ($materiales as $material)                            
                                    <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="material_letra">Material de letra</label>
                            <select class="form-control" name="material_letra" id="material_letra">
                                <option value="" selected disabled>Escoger Material</option>
                                @foreach ($materiales as $material)                            
                                    <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="contenido_letra">Contenido del texto</label>
                            <input class="form-control" type="text" name="texto_letra" id="contenido_letra">
                        </div>
                    </div>
                    <div class=" row my-3 mx-4">
                        <button class="btn btn-primary" onclick="tabla_cuello_letra();"> Agregar</button>
                    </div>
                </div>
                <div class="d-flex w-50 flex-column px-3">
                    <div class="p-3">
                        <div class="form-group">
                            <label for="color_fondo_letra">Color de fondo</label>
                            <input class="form-control tamano_input_color" type="color" name="color_fondo_letra" id="color_fondo_letra">
                        </div> 
                        <div class="row  mx-0">
                            <div class="form-group">
                                <label for="id_tipo_fuente__letra">Tipo de fuente</label>
                                <select class="form-control" name="tipo_fuente__letra" id="tipo_fuente__letra">
                                    <option value="" selected disabled>Escoge una fuente </option>
                                    <option value="" >Arial</option>
                                    <option value="" >Negrita</option>
                                    <option value="" >Cursiva</option>
                                </select>
                            </div>                        
                        </div>
                        <div class="row  mx-0">
                            <div class="form-group">
                                <label for="tamano_fuente_letra">Tamaño de fuente</label>
                                <input class="form-control tamano_input_color" type="number" name="tamano_fuente_letra" id="tamano_fuente_letra">
                            </div> 
                            <div class="form-group mx-3">
                                <label for="color_letra">Color de letra</label>
                                <input class="form-control tamano_input_color" type="color" name="color_letra" id="color_letra">
                            </div>   
                        </div> 
                        <div id="aviso_letra" class="row my-2">
            
                        </div>                                    
                    </div>
                </div>
            </div>
            <div id="tabla_diseno_letra" class="my-3 w-60 hiden animacion">
                <h4> Resumen del diseño</h4>
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>    
                            <th>Orden</th>
                            <th>Material</th>
                            <th>Color</th>
                            <th>Tamaño</th>
                            <th>Tipo de fuente</th>
                            <th>Contenido</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_letra">
                        
                    </tbody>
                </table>
                <div class=" row my-3 mx-1">                    
                    <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>    
                </div> 
            </div>
        </div>


        <!-- Formulario de diseño con figura-->
        <div id="formulario_cuello_figuras" class="container my-5 hiden animacion">
            <div class="row">
                <h4 class="my-5">Detalles del Diseño con figuras</h4>
            </div>
        
            <div class="boder_radius row">
                <div class="d-flex w-50 flex-column px-3">
                    <div class="p-3">
                        <div class="form-group">
                            <label for="">Material de fondo</label>
                            <select class="form-control" name="material_fondo_figura" id="material_fondo_figura" required>
                                <option value="" selected disabled>Escoger Material</option>
                                @foreach ($materiales as $material)                            
                                    <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="">Material de figura</label>
                            <select class="form-control" name="material_figura" id="material_figura" required>
                                <option value="" selected disabled>Escoger Material</option>
                                @foreach ($materiales as $material)                            
                                    <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                @endforeach
                            </select>
                            <div class="my-3">
                                <label for="imagen_diseno_figura">Imagen de figura</label>
                                <input class="w-100" type="file" name="" id="imagen_diseno_figura">
                            </div>
                        </div>
                        <div class="row  mx-0">
                            <div class="form-group">
                                <label for="imagen_diseño">Alto</label>
                                <input class="form-control tamano_input_color" type="number" name="alto_figura" id="alto_figura" required>
                            </div> 
                            <div class="form-group mx-3">
                                <label for="imagen_diseño">Ancho</label>
                                <input class="form-control tamano_input_color" type="number" name="ancho_figura" id="ancho_figura" required>
                            </div>   
                        </div>
                        
                    </div>
                </div>
                <div class="d-flex w-50 flex-column px-3">
                    <div class="p-3">
                        <div class="form-group">
                            <label for="imagen_diseño">Color de fondo</label>
                            <input class="form-control tamano_input_color" type="color" name="color_fondo_figura" id="color_fondo_figura" required>
                        </div> 
                        <div class="row  mx-0">
                            <div class="form-group">
                                <label for="imagen_diseño">Color de figura</label>
                                <input class="form-control tamano_input_color" type="color" name="color_figura" id="color_figura" required>
                            </div>                        
                        </div>                                     
                    </div>
                    <div id="aviso_figura" class="row my-2">
            
                    </div>
                </div>     
                <div class=" row my-3 mx-4">                    
                    <button class="btn btn-primary" onclick="tabla_cuello_figura();"> Agregar</button>
                </div>      
                
            </div>
            <div id="tabla_diseno_figura" class="my-3 w-60 hiden animacion">
                <h4> Resumen del diseño</h4>
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>    
                            <th>Orden</th>
                            <th>Material</th>
                            <th>Color</th>
                            <th>Alto</th>
                            <th>Ancho</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_figura">
                        
                    </tbody>
                </table>
                <div class=" row my-3 mx-1">                    
                    <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>
                </div> 
                
            </div>
            <div class="text-success" id="mensaje">
                    
            </div>
        </div>

        <!-- Formulario de diseño con liso-->
        <div id="formulario_cuello_liso" class="container my-5 hiden animacion">
            <div class="row">
                <h4 class="my-5">Detalles del Diseño con liso</h4>
            </div>
            <div class="boder_radius row">
                <div class="d-flex w-50 flex-column px-3">
                    <div class="p-3">
                        <div class="form-group">
                            <label for="">Material de fondo</label>
                            <select class="form-control" name="material_fondo_liso" id="material_fondo_liso">
                                <option value="" selected disabled>Escoger Material</option>
                                @foreach ($materiales as $material)                            
                                    <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
                <div class="d-flex w-50 flex-column px-3">
                    <div class="p-3">
                        <div class="form-group">
                            <label for="imagen_diseño">Color de fondo</label>
                            <input class="form-control tamano_input_color" type="color" name="color_fondo_liso" id="color_fondo_liso">
                        </div>                                   
                    </div>
                </div>
            </div>
            <div id="aviso_liso" class="row my-2">
            
            </div> 
            <div class=" row my-3">
                <button class="btn btn-primary" onclick="tabla_cuello_liso_mandar_datos()"> Crear Diseño</button>
            </div>
            
        </div>

        <!-- Formulario de diseño con cuello_letras cuello_figuras-->
        <div id="formulario_cuello_letrascuello_figuras" class="row show w-65 hiden animacion">
            <h4 class="my-5">Detalles del Diseño con letras y figuras</h4>
            <div class="boder_radius">
                <div class="row m-0">
                    <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                        <div>
                            <div class="form-group">
                                <label for="material_fondo_letra_figura">Material de fondo</label>
                                <select class="form-control" name="material_fondo" id="material_fondo_letra_figura">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="material_combinacion_figura">Material de figura</label>
                                <select class="form-control" name="" id="material_combinacion_figura_5">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>
                            <div class="row mx-0 justify-content-between w-100">
                                <div class="form-group">
                                    <label for="alto_combinacion_figura_5">Alto de figura</label>
                                    <input class="form-control tamano_input_color" type="number" name="" id="alto_combinacion_figura_5">
                                </div> 
                                <div class="form-group">
                                    <label for="imagen_diseño">Ancho de figura</label>
                                    <input class="form-control tamano_input_color" type="number" name="" id="ancho_combinacion_figura_5">
                                </div> 
                                <div class=" row my-3 mx-2">
                                    <a class="btn btn-primary color_a" href="#tabla_diseno_letra_figura" id="agregar_combinacion_figura"> Agregar figura</a>
                                </div>  
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-flex w-50 flex-column p-3 ">
                        <div class="form-group">
                            <label for="color_fondo_letra_figura">Color de fondo</label>
                            <input class="form-control tamano_input_color" type="color" name="" id="color_fondo_letra_figura">
                        </div> 
                        <div class="row  mx-0">
                            <div class="form-group">
                                <label for="color_combinacion_figura_5">Color de figura</label>
                                <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_figura_5">
                            </div>                        
                        </div>
                        <div>
                            <label for="imagen_diseno_combinacion_figura_5">Imagen de figura</label>
                            <input class="w-100" type="file" name="" id="imagen_diseno_combinacion_figura_5">
                        </div>  
                        <div id="aviso_letra_figura" class="row my-2"></div>                     
                    </div>
                </div>

                <div class="row m-0">
                    <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                        <div>
                            <div class="form-group">
                                <label for="material_combinacion_letra_5">Material de letra</label>
                                <select class="form-control" name="" id="material_combinacion_letra_5">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="contenido_texto_combinacion_letra_5">Contenido del texto</label>
                                <input class="form-control" type="text" name="" id="contenido_texto_combinacion_letra_5">
                            </div>                    
                        </div>
                    </div>
                    
                    <div class="d-flex w-50 flex-column p-3 ">                    
                        <div class="form-group">
                            <label for="tipo_fuente_combinacion_letra_5">Tipo de fuente</label>
                            <select class="form-control" name="" id="tipo_fuente_combinacion_letra_5">
                                <option value="" selected disabled>Escoger tipo de fuente</option>
                                <option value="" >Arial</option>
                                <option value="" >Negrita</option>
                                <option value="" >Cursiva</option>
                            </select>
                        </div>
                        <div class="row  mx-0 justify-content-between">
                            <div class="form-group">
                                <label for="color_combinacion_letra_5">Color de texto</label>
                                <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_letra_5">
                            </div>    
                            <div class="form-group ">
                                <label for="tamano_combinacion_letra_5">Tamaño de texto</label>
                                <input class="form-control tamano_input_color" type="number" name="" id="tamano_combinacion_letra_5">
                            </div>
                            <div id="aviso_letra_figura" class="row my-2"></div>                     
                        </div>                                     
                    </div>               
                    <div class=" row my-3 mx-4">
                        <a class="btn btn-primary color_a"  href="#tabla_diseno_letra_figura" id="agregar_combinacion_letra"> Agregar texto</a>
                    </div>
                </div>
            </div> 
            <div id="tabla_diseno_letra_figura" class="my-3 w-100 hiden animacion">
                <h4> Resumen del diseño</h4>
                <table class="table table-bordered w-100" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr class="text-center">   
                            <th>Orden</th>
                            <th>Material</th>
                            <th>Color</th>
                            <th class="w-50">Tamaño/ Alto</th>
                            <th class="w-75">Tipo de fuente/ Ancho</th>
                            <th>Contenido</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_letra_figura">
                        
                    </tbody>
                </table>
                <div class=" row my-3 mx-1">                    
                    <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>
                </div>                
            </div> 
            <div id="aviso_letra_figura_table" class="row my-2"></div>                     
        </div>

        <!-- Formulario de diseño con cuello_letras cuello_figuras cuello_lineas-->
        <div id="formulario_cuello_letrascuello_figurascuello_lineas" class="row show w-65 hiden animacion">
            <h4 class="my-5">Detalles del Diseño con letras, figuras y lineas</h4>
            <div class="boder_radius">
                <div class="row m-0">
                    <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                        <div>
                            <div class="form-group">
                                <label for="">Material de fondo</label>
                                <select class="form-control" name="" id="material_fondo_letra_linea_figura">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="material_combinacion_figura_7">Material de figura</label>
                                <select class="form-control" name="" id="material_combinacion_figura_7">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>
                            <div class="row mx-0 justify-content-between w-100">
                                <div class="form-group">
                                    <label for="alto_combinacion_figura_7">Alto de figura</label>
                                    <input class="form-control tamano_input_color" type="number" name="" id="alto_combinacion_figura_7">
                                </div> 
                                <div class="form-group">
                                    <label for="ancho_combinacion_figura_7">Ancho de figura</label>
                                    <input class="form-control tamano_input_color" type="number" name="" id="ancho_combinacion_figura_7">
                                </div>
                                <div class=" row my-3 mx-2">
                                    <a class="btn btn-primary color_a" href="#tabla_diseno_letra_linea_figura" id="agregar_combinacion_figura_3"> Agregar figura</a>
                                </div>   
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-flex w-50 flex-column p-3 ">
                        <div class="form-group">
                            <label for="imagen_diseño">Color de fondo</label>
                            <input class="form-control tamano_input_color" type="color" name="" id="color_fondo_letra_linea_figura">
                        </div> 
                        <div class="row  mx-0">
                            <div class="form-group">
                                <label for="color_combinacion_figura_7">Color de figura</label>
                                <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_figura_7">
                            </div>                        
                        </div>  
                        <div>
                            <label for="imagen_diseno_combinacion_figura_7">Imagen de figura</label>
                            <input class="w-100" type="file" name="" id="imagen_diseno_combinacion_figura_7">
                        </div>  
                        <div id="aviso_letra_linea_figura" class="row my-2"></div>                                     
                    </div>
                </div>

                <div class="row m-0">
                    <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                        <div>
                            <div class="form-group">
                                <label for="material_combinacion_letra_7">Material de letra</label>
                                <select class="form-control" name="" id="material_combinacion_letra_7">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="contenido_texto_combinacion_letra_7">Contenido del texto</label>
                                <input class="form-control" type="text" name="" id="contenido_texto_combinacion_letra_7">
                            </div>                    
                        </div>
                    </div>
                    
                    <div class="d-flex w-50 flex-column p-3 ">
                        <div class="form-group">
                            <label for="tipo_fuente_combinacion_letra_7">Tipo de fuente</label>
                            <select class="form-control" name="" id="tipo_fuente_combinacion_letra_7">
                                <option value="" selected disabled>Escoger tipo de fuente</option>
                                <option value="" >Arial</option>
                                <option value="" >Negrita</option>
                                <option value="" >Cursiva</option>
                            </select>
                        </div>
                        <div class="row  mx-0 justify-content-between">
                            <div class="form-group">
                                <label for="color_combinacion_letra_7">Color de texto</label>
                                <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_letra_7">
                            </div>    
                            <div class="form-group ">
                                <label for="tamano_combinacion_letra_7">Tamaño de texto</label>
                                <input class="form-control tamano_input_color" type="number" name="" id="tamano_combinacion_letra_7">
                            </div> 
                            <div id="aviso_letra_linea_figura" class="row my-2"></div>                     

                        </div>                                     
                    </div>
                    <div class=" row my-3 mx-4">
                        <a class="btn btn-primary color_a"  href="#tabla_diseno_letra_linea_figura" id="agregar_combinacion_letra_3"> Agregar texto</a>
                    </div> 
                </div>

                <div class="row m-0">
                    <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                        <div>
                            <div class="form-group">
                                <label for="material_combinacion_linea_7">Material de lineas</label>
                                <select class="form-control" name="" id="material_combinacion_linea_7">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>                    
                        </div>
                    </div>
                    
                    <div class="d-flex w-50 flex-column p-3 ">                    
                        <div class="row  mx-0 justify-content-between">
                            <div class="form-group">
                                <label for="color_combinacion_linea_7">Color de linea</label>
                                <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_linea_7">
                            </div>    
                            <div class="form-group ">
                                <label for="grosor_combinacion_linea_7">Grosor de linea</label>
                                <input class="form-control tamano_input_color" type="number" name="" id="grosor_combinacion_linea_7">
                            </div> 
                            <div id="aviso_letra_linea_figura" class="row my-2"></div>                   

                        </div>                                     
                    </div>
                    <div class=" row my-3 mx-4">
                        <a class="btn btn-primary color_a" href="#tabla_diseno_letra_linea_figura" id="agregar_combinacion_linea_4"> Agregar linea</a>
                    </div> 
                </div>            
            </div>
            <div id="tabla_diseno_letra_linea_figura" class="my-3 w-100 hiden animacion">
                <h4> Resumen del diseño</h4>
                <table class="table table-bordered w-100" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr class="text-center">   
                            <th>Orden</th>
                            <th>Material</th>
                            <th>Color</th>
                            <th class="w-50">Tamaño/ Grosor/ Alto</th>
                            <th class="w-75">Tipo de fuente/ Ancho</th>
                            <th>Contenido</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_letra_linea_figura">
                        
                    </tbody>
                </table>
                <div class=" row my-3 mx-1">                    
                    <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>
                </div>                
            </div>
            <div id="aviso_letra_linea_figura_table" class="row my-2"></div>                   

        </div>

        <!-- Formulario de diseño con cuello_letras  cuello_lineas-->
        <div id="formulario_cuello_letrascuello_lineas" class="row show w-65 hiden animacion">
            <h4 class="my-5">Detalles del Diseño con letras y lineas</h4>
            <div class="boder_radius">
                <div class="row m-0">
                    <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                        <div>
                            <div class="form-group">
                                <label for="material_fondo_letra_linea">Material de fondo</label>
                                <select class="form-control" name="" id="material_fondo_letra_linea">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-flex w-50 flex-column p-3 ">
                        <div class="form-group">
                            <label for="color_fondo_letra_linea">Color de fondo</label>
                            <input class="form-control tamano_input_color" type="color" name="" id="color_fondo_letra_linea">
                        </div>                                    
                    </div>
                </div>

                <div class="row m-0">
                    <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                        <div>
                            <div class="form-group">
                                <label for="material_combinacion_letra_6">Material de letra</label>
                                <select class="form-control" name="" id="material_combinacion_letra_6">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="contenido_texto_combinacion_letra_6">Contenido del texto</label>
                                <input class="form-control" type="text" name="" id="contenido_texto_combinacion_letra_6">
                            </div>                    
                        </div>
                    </div>
                    
                    <div class="d-flex w-50 flex-column p-3 ">
                        <div class="form-group">
                            <label for="tipo_fuente_combinacion_letra_6">Tipo de fuente</label>
                            <select class="form-control" name="material_linea" id="tipo_fuente_combinacion_letra_6">
                                <option value="" selected disabled>Escoger tipo de fuente</option>
                                <option value="" >Arial</option>
                                <option value="" >Negrita</option>
                                <option value="" >Cursiva</option>
                            </select>
                        </div>
                        <div class="row  mx-0 justify-content-between">
                            <div class="form-group">
                                <label for="color_combinacion_letra_6">Color de texto</label>
                                <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_letra_6">
                            </div>    
                            <div class="form-group ">
                                <label for="tamano_combinacion_letra_6">Tamaño de texto</label>
                                <input class="form-control tamano_input_color" type="number" name="" id="tamano_combinacion_letra_6">
                            </div> 
                            <div id="aviso_letra_linea" class="row my-2"></div>                     
                        </div>                                                        
                    </div>
                    <div class=" row my-3 mx-4">
                        <a class="btn btn-primary color_a"  href="#tabla_diseno_letra_linea" id="agregar_combinacion_letra_2"> Agregar texto</a>
                    </div> 
                </div>

                <div class="row m-0">
                    <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                        <div>
                            <div class="form-group">
                                <label for="material_combinacion_linea_6">Material de lineas</label>
                                <select class="form-control" name="" id="material_combinacion_linea_6">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>                    
                        </div>
                    </div>
                    
                    <div class="d-flex w-50 flex-column p-3 ">                    
                        <div class="row  mx-0 justify-content-between">
                            <div class="form-group">
                                <label for="color_combinacion_linea_6">Color de linea</label>
                                <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_linea_6">
                            </div>    
                            <div class="form-group ">
                                <label for="grosor_combinacion_linea_6">Grosor de linea</label>
                                <input class="form-control tamano_input_color" type="number" name="" id="grosor_combinacion_linea_6">
                            </div>
                            <div id="aviso_letra_linea" class="row my-2"></div>                   
                        </div>                                     
                    </div>
                    <div class=" row my-3 mx-4">
                        <a class="btn btn-primary color_a" href="#tabla_diseno_letra_linea" id="agregar_combinacion_linea_3"> Agregar linea</a>
                    </div> 
                </div>            
            </div> 
            <div id="tabla_diseno_letra_linea" class="my-3 w-100 hiden animacion">
                <h4> Resumen del diseño</h4>
                <table class="table table-bordered w-100" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr class="text-center">   
                            <th>Orden</th>
                            <th>Material</th>
                            <th>Color</th>
                            <th class="w-50">Tamaño/ Grosor</th>
                            <th class="w-75">Tipo de fuente</th>
                            <th>Contenido</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_linea_letra">
                        
                    </tbody>
                </table>
                <div class=" row my-3 mx-1">                    
                    <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>
                </div>                
            </div>
            <div id="aviso_letra_linea_table" class="row my-2"></div>                   

        </div>

        <!-- Formulario de diseño con  cuello_figuras cuello_lineas-->
        <div id="formulario_cuello_figurascuello_lineas" class="row show w-65 hiden animacion">
            <h4 class="my-5">Detalles del Diseño con figuras y lineas</h4>
            <div class="boder_radius">
                <div class="row m-0">
                    <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                        <div>
                            <div class="form-group">
                                <label for="material_fondo_figura_linea">Material de fondo</label>
                                <select class="form-control" name="" id="material_fondo_figura_linea">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="material_combinacion_figura_8">Material de figura</label>
                                <select class="form-control" name="material_linea" id="material_combinacion_figura_8">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>
                            <div class="row mx-0 justify-content-between w-100">
                                <div class="form-group">
                                    <label for="alto_combinacion_figura_8">Alto de figura</label>
                                    <input class="form-control tamano_input_color" type="number" name="" id="alto_combinacion_figura_8">
                                </div> 
                                <div class="form-group">
                                    <label for="ancho_combinacion_figura_8">Ancho de figura</label>
                                    <input class="form-control tamano_input_color" type="number" name="" id="ancho_combinacion_figura_8">
                                </div>   
                                <div class=" row my-3 mx-2">
                                    <a class="btn btn-primary color_a" href="#tabla_diseno_linea_figura" id="agregar_combinacion_figura_2"> Agregar figura</a>
                                </div> 
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-flex w-50 flex-column p-3 ">
                        <div class="form-group">
                            <label for="color_fondo_linea_figura">Color de fondo</label>
                            <input class="form-control tamano_input_color" type="color" name="" id="color_fondo_linea_figura">
                        </div> 
                        <div class="row  mx-0">
                            <div class="form-group">
                                <label for="color_combinacion_figura_8">Color de figura</label>
                                <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_figura_8">
                            </div> 
                            <div>
                                <label for="imagen_diseno_combinacion_figura_8">Imagen de figura</label>
                                <input class="w-100" type="file" name="" id="imagen_diseno_combinacion_figura_8">
                            </div> 
                            <div id="aviso_linea_figura" class="row my-2"></div>                     
                        </div>                                     
                    </div>
                </div>

                
                <div class="row m-0">
                    <div class="d-flex w-50 flex-column w-md-80 w-md-50 justify-content-between p-3">
                        <div>
                            <div class="form-group">
                                <label for="material_combinacion_linea_8">Material de lineas</label>
                                <select class="form-control" name="material_fondo" id="material_combinacion_linea_8">
                                    <option value="" selected disabled>Escoger Material</option>
                                    @foreach ($materiales as $material)                            
                                        <option value="{{$material->id_material_cuello}}">{{$material->nombre_material}}</option>                                
                                    @endforeach
                                </select>
                            </div>                    
                        </div>
                    </div>
                    
                    <div class="d-flex w-50 flex-column p-3 ">                    
                        <div class="row  mx-0 justify-content-between">
                            <div class="form-group">
                                <label for="imagen_diseño">Color de linea</label>
                                <input class="form-control tamano_input_color" type="color" name="" id="color_combinacion_linea_8">
                            </div>    
                            <div class="form-group ">
                                <label for="grosor_combinacion_linea_8">Grosor de linea</label>
                                <input class="form-control tamano_input_color" type="number" name="" id="grosor_combinacion_linea_8">
                            </div>  
                            <div id="aviso_linea_figura" class="row my-2"></div>                   
                        </div>                                     
                    </div>
                    
                    <div class=" row my-3 mx-4">
                        <a class="btn btn-primary color_a" href="#tabla_diseno_linea_figura" id="agregar_combinacion_linea_2"> Agregar linea</a>
                    </div> 
                </div>            
            </div> 
            <div id="tabla_diseno_linea_figura" class="my-3 w-100 hiden animacion">
                <h4> Resumen del diseño</h4>
                <table class="table table-bordered w-100" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr class="text-center">   
                            <th>Orden</th>
                            <th>Material</th>
                            <th>Color</th>
                            <th class="w-50">Alto / Grosor</th>
                            <th class="w-75">Ancho</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_linea_figura">
                        
                    </tbody>
                </table>
                <div class=" row my-3 mx-1">                    
                    <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Guardar</button>
                </div>                
            </div>
            <div id="aviso_linea_figura_table" class="row my-2"></div>
        </div>
    </div>
@endsection

@section('scripts')
    <script  src="{!! asset('js/funciones_para_cuellos.js') !!}"></script>
@endsection