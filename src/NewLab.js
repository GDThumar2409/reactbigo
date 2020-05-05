import React, { Component } from 'react';

export default class componentName extends Component {
  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p>Unable to log in with provided credentials.</p>
      );
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div>
                {errorMessage}
                {
                  this.props.loading ?
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                    :
                    <div className="content-section">
                      <form method="POST" id="form">

                        <fieldset className="form-group">
                          <legend className="border-bottom mb-4">New Lab</legend>
                          <div id="div_id_labtitle" className="form-group">
                            <label htmlFor="id_labtitle" className=" requiredField">
                              Lab-Title<span className="asteriskField">*</span>
                            </label>
                            <div className="">
                              <input type="text" name="labtitle" autoFocus="" autoCapitalize="none"
                                autoComplete="labtitle" maxLength="150" className="textinput textInput form-control" required=""
                                id="id_labtitle" />
                            </div>
                          </div>
                          <div id="div_id_labnumber" className="form-group">
                            <label htmlFor="id_labnumber" className=" requiredField">
                              Lab-Number<span className="asteriskField">*</span>
                            </label>
                            <div className="">
                              <input type="number" name="labnumber" autoFocus="" autoCapitalize="none"
                                autoComplete="labnumber" maxLength="150" className="textinput textInput form-control" required=""
                                id="id_labnumber" />
                            </div>
                          </div>
                          <div id="div_id_subjects" class="form-group">
                            <label for="id_subjects" class=" requiredField">
                              Subject<span className="asteriskField">*</span>
                            </label>
                            <div>
                              <select name="subjects" class="select form-control" id="id_subjects">
                                <option value="DSA">DSA</option>
                                <option value="JAVA">JAVA</option>
                                <option value="AA" selected="">AA</option>
                              </select>
                            </div>
                          </div>
                          <div >
                          
                                <div id="div_id_Starting_date" class="form-group">
                                  <label for="id_Starting_date" class=" requiredField">
                                    Starting date<span class="asteriskField">*</span>
                                  </label>
                                  <div class="">
                                    <input type="date" name="Starting_date" class="dateinput form-control" required="" id="id_Starting_date" />
                                    <input type="hidden" name="initial-Starting_date" id="initial-id_Starting_date" />
                                  </div>
                                </div>
                              
                                <div id="div_id_Ending_date" class="form-group">
                                  <label for="id_Ending_date" class=" requiredField">
                                  Ending date<span class="asteriskField">*</span>
                                  </label>
                                  <div class="">
                                    <input type="date" name="Ending_date" class="dateinput form-control" required="" id="id_Ending_date" />
                                    <input type="hidden" name="initial-Ending_date" id="initial-id_Ending_date" />
                                  </div>
                                </div>
                              
                          </div>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox1"/> &nbsp;
                            <label for="checkbox1">
                              Visible
                            </label>
                          </div>

                        </fieldset>


                        <div className="form-group">
                          <button className="btn btn-outline-info" type="submit" onClick={(e) => this.handleSubmit(e)}>Login</button>
                        </div>

                      </form>
                    </div>
                }
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

