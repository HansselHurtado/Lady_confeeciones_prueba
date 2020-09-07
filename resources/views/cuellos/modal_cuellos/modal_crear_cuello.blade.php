<!-- Modal aviso -->
<div class="portfolio-modal modal fade modal_aviso"  tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                            <div class="divider-custom-icon">   <img src="{{ asset('/icons/almohada.svg') }}" alt="" width="50px"></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <!-- Contact Section Form-->
                        <div class="row">
                            <div class="row mx-auto">
                                <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.-->
                                <div class="control-group mx-4">
                                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label> Los fondos de cuello tienen un alto maximo de 10 cm</label>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Por favor si tiene algunas especificciones, dejarlo en la descripción</label>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                        <p class="help-block text-danger"></p>                                          
                                        {{-- <select style="border-radius: 10px; height: 50px; font-size: 20px;" id="email" class="browser-default custom-select mb-4" name="departamento"  required>
                                            <option value="" selected disabled>Seleccione su departamento</option>                                                                   
                                            @foreach ($departamentos as $departamento)
                                                <option value="{{$departamento->id_departamento}}" >{{$departamento->departamento}}</option> 
                                            @endforeach                                                                                                                  
                                        </select>                                         --}}
                                    </div>
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
<div class="portfolio-modal modal fade " id="Modal_mostrar_diseno_hecho" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            <div class="modal-body text-center">
                <section class="page-section">
                    <div class="container">
                        <!-- Contact Section Heading-->
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0" id="nombre_modelo_creado">Finalizar Diseño</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon">   <img src="{{ asset('/icons/almohada.svg') }}" alt="" width="50px"></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <!-- Contact Section Form-->
                        <div class="d-flex flex-column">
                            <div class=" row my-3 mx-1 d-flex justify-content-around">             
                                <label for="">Talla</label>
                                <select class="form-control w-30" name="" id="talla_seleccionada" required>
                                    <option value="" selected disabled>Escoger Material</option>
                                    <option >12</option>                                
                                    <option >14</option>                                
                                    <option >16</option>                                
                                    <option >18</option>                                
                                </select>
                                <label for="imagen_diseño">Cantidad</label>
                                <input class="form-control tamano_input_color" type="number" name="" id="cantidad_tallas" maxlength="4" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required>
                                            
                                <button class="btn btn-primary color_a" onclick="agregar_tallas();"> Agregar</button>
                           
                            </div>  
                            <div id="tabla_tallas" class="my-3 w-60 hiden animacion">
                                <table class="table table-bordered " id="dataTable" width="100%" cellspacing="0">
                                    <thead class="color-table">
                                        <tr>    
                                            <th>Talla</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
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
                            
                                <div id="punos_fajas" class="d-flex flex-column">
                                    <div class="justify-content-start text-left">
                                        <label for="">El puño y las fajas son el mismo que el modelo del cuello</label>
                                    </div>
                                    <div class="d-flex">
                                        <div class="d-flex align-items-center mx-2">
                                            <label for="id_tallas_si" class="m-0" >Sí</label>
                                            <input  class="ml-1 tallas" type="radio" name="tallas" value="2" id="id_tallas_si">
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <label for="id_tallas_no" class="m-0">No</label>
                                            <input class="ml-1 tallas" type="radio" name="tallas" value="1" id="id_tallas_no">
                                        </div>  
                                    </div> 
                                    <div id="imagen_punos_fajas" class="my-3 hiden animacion text-left">
                                        <label class="" for="">Por favor introduzca una imagen del diseño de puño</label>
                                        <input class="w-100" type="file" name="" id="">
                                    </div>                               
                                </div>
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
                            
                            <div class=" row my-3 mx-1 d-flex justify-content-start">                    
                                <button class="btn btn-primary" onclick="tabla_cuello_mandar_datos();">Finalizar pedido</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>