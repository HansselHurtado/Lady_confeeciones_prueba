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