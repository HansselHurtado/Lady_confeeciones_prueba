<!-- Modal aviso -->
<div class="portfolio-modal modal fade" id="Modal_mostrar_imagen_diseno" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <button type="button" class="close button_close_modal" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            <div class="modal-body text-center">
                <section class="page-section" id="contact">
                    <div class="container">
                        <!-- Contact Section Heading-->
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0" id="nombre_modelo"></h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"> <h4 id="titulo_img"> </h4></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <!-- Contact Section Form-->
                        <div class="row">
                            <div class="row mx-auto">
                                <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.-->
                                <div class="control-group mx-4" id="show_img">
                                    
                                </div>
                                                               
                                <div id="success"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>

<!-- Modal cuello creado -->
<form class="portfolio-modal modal fade form " action="#" id="Modal_mostrar_diseno_hecho"  data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <button type="button" id="close_button" class="close button_close_modal button_cerrar_modal" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
            </button>   
            <div class="modal-body text-center">
                <section class="page-section">
                    <div class="container">
                        <!-- Contact Section Heading-->
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0" id="nombre_modelo_creado">Finalizar Pedido</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon">   <img src="{{ asset('/icons/almohada.svg') }}" alt="" width="50px"></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <!-- Contact Section Form-->
                        <div class="d-flex flex-column">
                            <div class=" row my-3 mx-1 d-flex justify-content-around ">             
                                <label for="">Talla</label>
                                <select class="form-control w-30" name="" id="talla_seleccionada_diseno" >
                                    <option value="" selected>Seleccionar</option>
                                    <option value="1"  id="12">12</option>                                
                                    <option value="2"  id="14">14</option>                                
                                    <option value="3"  id="16">16</option>                                
                                    <option value="4"  id="18">18</option>                                
                                </select>
                                <label for="imagen_diseño">Cantidad</label>
                                <input class="form-control tamano_input_color" type="number" name="" id="cantidad_tallas_diseno" min="1" onkeypress="return event.keyCode!=45" pattern="^[0-9]+" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" >
                                            
                                <button class="btn btn-primary color_a" onclick="agregar_tallas_crear_diseno();"> Agregar</button>
                           
                            </div>  
                            <div id="tabla_tallas_diseno" class="my-3 w-60 hiden animacion">
                                <table class="table table-bordered " id="dataTable" width="100%" cellspacing="0">
                                    <thead class="color-table">
                                        <tr>    
                                            <th>Talla</th>
                                            <th>Cantidad</th>
                                            <th>Valor Unitario</th>
                                            <th>Valor Total</th>
                                            <th>Opción</th>
                                        </tr>
                                    </thead>
                                    <tfoot class="color-table">
                                        <tr>
                                          <th>Total</th>
                                          <th id="suma_cantidades_diseno"></th>
                                          <th colspan="2" class="text-right" id="suma_valor_total_disno"></th>
                                          <th></th>
                                        </tr>
                                      </tfoot>
                                    <tbody id="tbody_tallas_diseno">
                                        
                                    </tbody>
                                </table>
                                <div id="para algun aviso" class="row my-2"></div>  
                                
                                <div class=" row my-3 mx-1 d-flex justify-content-start">           
                                     
                                                             
                                </div>                             
                                
                            </div>
                            <div id="punos_fajas" class="d-flex flex-column">   
                                {{-- puño --}}
                                <div class="text-left">
                                    <span class="text-success"><strong> Sección de Puños</strong></span>
                                </div>
                                <div class="border border-medium my-2 p-3 rounded">
                                    <div class=" my-2 d-flex justify-content-start">                    
                                        <label for="imagen_diseño">Cantidad de Puños</label>
                                        <input class="form-control tamano_input_color mx-2" type="number" name="" id="punos" min="1" onkeypress="return event.keyCode!=45" pattern="^[0-9]+" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" > 
                                    </div> 
                                    <div class="justify-content-start text-left">
                                        <label for="">El puño conserva el mismo modelo del cuello</label>
                                    </div>
                                    <div class="d-flex">
                                        <div class="d-flex align-items-center mx-2">
                                            <label for="id_tallas_si" class="m-0" >Sí</label>
                                            <input  class="ml-1 tallas" type="radio" id="si_puno" name="tallas_puno" value="2" checked >
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <label for="id_tallas_no" class="m-0">No</label>
                                            <input class="ml-1 tallas" type="radio" id="no_puno" name="tallas_puno" value="1" >
                                        </div>  
                                    </div> 
                                    <div id="imagen_punos_puno" class="my-3 hiden animacion text-left">
                                        <label class="" for="">Por favor introduzca una imagen del diseño de puño</label>
                                        <input class="w-100" type="file" name="" id="puno_img" accept="image/gif,image/jpeg,image/jpg,image/png">
                                    </div>     
                                </div>
                                
                                {{-- faja --}}
                                <div class="text-left">
                                    <span class="text-success"><strong> Sección de Fajas</strong></span>
                                </div>
                                <div class="border border-medium my-2 p-3 rounded">
                                    <div class=" my-2 d-flex justify-content-start">                    
                                        <label for="imagen_diseño">Cantidad de Fajas</label>
                                        <input class="form-control tamano_input_color mx-2" type="number" name="" id="fajas" min="1" onkeypress="return event.keyCode!=45" pattern="^[0-9]+" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" >
                                    </div>
                                    <div class="justify-content-start text-left">
                                        <label for="">La faja conserva el mismo modelo del cuello</label>
                                    </div>
                                    <div class="d-flex">
                                        <div class="d-flex align-items-center mx-2">
                                            <label for="id_tallas_si" class="m-0" >Sí</label>
                                            <input  class="ml-1 tallas" type="radio" id="si_faja" name="tallas_faja" value="4" checked>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <label for="id_tallas_no" class="m-0">No</label>
                                            <input class="ml-1 tallas" type="radio" id="no_faja" name="tallas_faja" value="3">
                                        </div>  
                                    </div>
                                    <div id="imagen_punos_fajas" class="my-3 hiden animacion text-left">
                                        <label class="" for="">Por favor introduzca una imagen del diseño de faja</label>
                                        <input class="w-100" type="file" name="" id="faja_img" accept="image/gif,image/jpeg,image/jpg,image/png">
                                    </div>   
                                </div>                           
                            </div>

                            
                            {{-- <div class="border border-medium d-flex p-3 rounded w-50">
                                <div class="mr-3">
                                    <img src="{{ asset('/icons/almohada.svg') }}" alt="" width="30px">
                                </div>
                                <div class="text-left">
                                    <span class="text-success"><strong>Diseño Gratis</strong></span>
                                    <p>Después de 12 unidades</p>
                                </div>
                            </div> --}}
                            <div class=" row my-3 mx-1 d-flex justify-content-start">                    
                                <button class="btn btn-primary mandar_datos " id="mandar_datos" >Añadir al carrito</button>
                            </div>                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</form>