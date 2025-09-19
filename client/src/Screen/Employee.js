import React from 'react'

function Employee() {
  return (
    <>
      <div>
 <div className="row p-2 m-2 border">
  <div className="col-9">
    <h2 className="text-info text-left">Employee List</h2>
  </div>
  <div className="col-3"> 
    <button className="btn btn-success form-control" data-target ="#newEmployee" data-toggle ="modal">
     AddNewEmployee
    </button>
  </div>
 </div>
 <div className="border p-2 m-2">
  <table className="table table-border table-striped table-active">
  <thead>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Salary</th>
      <th>Actions</th>
    </tr>
  </thead>
  </table>
 </div>
 </div>
{/* ----New Employee--- */}
 <div class="modal" tabindex="-1" role="dialog"id="newEmployee">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info text-white">
        <h5 class="modal-title">New Employee</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <div class="form-group row">
                <label class="col-4">Name</label>
                <div class="col-8">
                    <input id="textname"type ="text"name="name"class="form-control"placeholder="Enter Employee Name"></input>
                </div>
            </div> 
             <div class="form-group row">
                <label class="col-4">Address</label>
                <div class="col-8">
                    <input id="textaddress"type="text"name="address"class="form-control"placeholder="Enter Address"></input>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-4">Salary</label>
                <div class="col-8">
                    <input id="textsalary"type="number"name="salary"class="form-control"placeholder="Enter Salary"></input>
                </div>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button"class="btn btn-primary" data-dismiss="modal">Save changes</button>
        <button type="button"class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
    </div>  
</div>
</>
  )
}
export default Employee
