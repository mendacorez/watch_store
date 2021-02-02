import React, { useState } from 'react';
import classes from './CreateOrder.module.css';
import GoodSelect from '../../Selects/GoodSelect/GoodSelect';

const CreateOrder = () => {
    const [watch_id, setWatch_id] = useState();

    return(
        <div>
            <button
        type="button"
        class="btn btn-success"
        data-toggle="modal"
        data-target={`#addOrder`}
      >
        Оформить покупку
      </button>

      <div class="modal" id={`addOrder`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Оформление заказа</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div>
                <label>Выберите модель:</label>
                <GoodSelect 
                address="listofgoodsclient"
                value={watch_id}
                // onChange={(e) => setMechanism_type_id(e.target.value)}
                />
              </div> 
              
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Готово
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default CreateOrder;