<!-- Modal detalle de cuello -->
<div class="portfolio-modal modal fade" id="Modal_detalle_cuello" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
    <div class="modal-dialog modal-lg-ancho" role="document">
        <div class="modal-content">
            <button type="button" class="close button_close_modal" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body text-center">
                <div class="row">
                    <div class="w-50 d-flex align-items-center">
                        <div class="divider-custom-icon">   <img src="{{ asset('/icons/almohada.svg') }}" alt="" width="60%"></div>
                    </div>
                    <div class="w-50 d-flex flex-column pr-3">
                        <div class="d-flex flex-column text-left">
                            <button class="btn btn-primary">GRAN OFERTA</button>
                            <h4>Cuello modelo <strong id="nombre_modelo"></strong></h4>
                        </div>
                        <div class="text-left">
                            <span>modelo <strong id="modelo_detalle"></strong></span>
                            <h4 class="text-danger"><strong id="precio_cuello_detalle"></strong></h4>
                        </div>
                        <div class="border border-medium d-flex p-3 rounded">
                            <div class="mr-3">
                                <img src="{{ asset('/icons/almohada.svg') }}" alt="" width="30px">
                            </div>
                            <div class="text-left">
                                <span class="text-success"><strong>Envío gratis</strong></span>
                                <p>Después de 12 unidades</p>
                            </div>
                        </div>
                        <div class="d-flex flex-column border border-medium rounded mt-3">
                            <div class=" row my-3 mx-1 d-flex justify-content-around justify-content-between">  
                                <div class="d-flex col-5 align-items-center">
                                    <label for="" class="m-0 mr-2">Talla</label>
                                    <select class="form-control w-100" name="" id="talla_seleccionada" required>
                                        <option value="" selected disabled>Seleccione</option>
                                        <option class="quitar_disabled" id="12" >12</option>                                
                                        <option class="quitar_disabled" id="14" >14</option>                                
                                        <option class="quitar_disabled" id="16" >16</option>                                
                                        <option class="quitar_disabled" id="18" >18</option>                                
                                    </select>
                                </div>           
                                <div class="d-flex col-4 align-items-center p-0">
                                    <label for="imagen_diseño" class="m-0 mr-2">Cantidad</label>
                                    <input class="form-control w-100" type="number" name="" id="cantidad_tallas" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required>
                                </div>
                                  
                                <div class="col-3">
                                    <button class="btn btn-primary color_a" onclick="agregar_tallas();"> Agregar</button>

                                </div>
                           
                            </div>  
                            <div id="tabla_tallas" class="my-3 w-60 hiden animacion pl-4">
                                <table class="table table-bordered " id="dataTable" width="100%" cellspacing="0">
                                    <thead class="color-table">
                                        <tr>    
                                            <th>Talla</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                            <th>Opción</th>
                                        </tr>
                                    </thead>
                                    <tfoot class="color-table">
                                        <tr>
                                          <th>Total</th>
                                          <th id="suma_cantidades"></th>
                                          <th id="suma_valor_total"></th>
                                        </tr>
                                      </tfoot>
                                    <tbody id="tbody_tallas">
                                        
                                    </tbody>
                                </table>
                                <div id="para algun aviso" class="row my-2"></div>                      
                            </div>

                            <div class=" row my-3 mx-1 d-flex justify-content-start">
                                           
                                <div class="">                    
                                    <label for="imagen_diseño">Cantidad de Fajas</label>
                                    <input class="form-control tamano_input_color mx-2" type="number" name="" id="" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required>
                                </div>
                                <div class="">                    
                                    <label for="imagen_diseño">Cantidad de Puños</label>
                                    <input class="form-control tamano_input_color mx-2" type="number" name="" id="" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required> 
                                </div>                                                         
                            </div> 
                            <div>
                                
                            </div>
                        </div>                       
                        <div class=" p-3 row my-3 mx-1 d-flex justify-content-start">                    
                            <button class="btn btn-primary mandar_datos p-3 w-60 " id="mandar_datos" >Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


