import React from "react";
import {useSelector} from "react-redux";

function RekvisityBanner(){
    const create = useSelector(state => {
        return state;
    })
    return(
        <>
            <div className="col-lg-8 col-md-7">
                <p>Вы успешно зарегистрировали заявку на размещение бегущей строки. Вам необходимо запомнить или
                    записать код оплаты, сумму к оплате, срок до которого необходимо оплатить и внести оплату любым
                    удобным для Вас способом.</p>
                <hr/>
                <div className="order-one-row">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>код оплаты</h4>
                            <p className="hint"><span>Введите этот номер в терминале:<b>Terem Pay, Quickpay, О!Деньги, Balance.kg, QIWI, Кыргыз Почтасы, Элсом, Optima Bank, Optima24, UMAI, Мобильник</b></span>
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <div className="code">{create.infoUser2Reducer.infoUserBanner.payment_code}</div>
                        </div>
                        <div className="col-sm-6">
                            <p className="hint"></p><p>Вы имеете возможность оплатить объявление картами Visa и
                            MasterCard<br/><img className="imgpayment" src="http://natv.kg/files/vm.jpg?1530176407153" alt="vm"/></p><p></p>
                        </div>
                        <div className="col-sm-6">

                            <input style={{color: "#fff"}} className="paybox-submit" type="button" value="Оплатить"/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="order-one-row">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>стоимость объявления</h4>
                            <p className="hint">Оплатить необходимо сумму не менее указанной стоимости заявки. В случае,
                                если сумма к оплате будет меньше, заявка не будет размещена.</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="sum"> {create.infoUser2Reducer.infoUserBanner.price} сом</div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="order-one-row">
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="fs-6">ЗАГРУЖЕННОЕ ИЗОБРАЖЕНИЕ</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="mes">  <img src={create.infoUser2Reducer.infoUserBanner.image}/></div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="order-one-row">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>каналы и даты выхода</h4>

                        </div>
                        <div className="col-sm-6">
                            <ul className="ch-list list-unstyled">
                                <li>
                                    <div className="pinj">
                                        {create.channelsImagesReducer.contentsChannels.map(item => {
                                            return ` ${item.name},`
                                        })}
                                    </div>
                                    <div className="date">
                                        {create.channelsImagesReducer.contentsChannels.map(item => {
                                            return ` ${item.day},`
                                        })}
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="order-one-row">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>срок оплаты объявления</h4>
                            <p className="hint">Вам необходимо произвести оплату до 15:00 рабочего дня, предшествующего
                                выходу объявления в эфир. Оплатите выбранные даты заранее и размещение будет Вам
                                гарантировано. В случае неоплаты ваша заявка не будет выполнена.</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="mes">
                                {create.infoUser2Reducer.infoUserBanner.payment_day.slice(9, 10) + " декабря"}
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <br/><br/>
            </div>
        </>
    )
}

export default RekvisityBanner;