<?php include ROOT . '/views/layouts/header.php'; ?>
<section>
    <div class="container">
        <div class="row">
            <div class="info-change">
                <div class="info-change__cabinet">
                  <h1>Персональный кабинет</h1>
                  <a class="btn-exite" href="/logout">Выход</a>
                </div>
                <h3>
                    <span>Изменение личных данных</span>
                </h3>

                <div>
                    <form>
                        <div class="form-group">
                            <label for="name">Имя:</label>
                            <input type="text" class="form-basket" id="name" placeholder="<?php echo $_SESSION['user']['name']?>">
                            <button onclick="return false;" class="btn-start_office"></button>
                        </div>

                        <div class="form-group">
                            <label for="tell">Номер:</label>
                            <input type="text" class="form-basket phone" id="tell" placeholder="<?php echo $_SESSION['user']['telephone']?>">
                            <button onclick="return false;" class="btn-start"></button>
                        </div>

                    </form>
                </div>
            </div>
            <div class="order-history">
                <h3>
                    <span>История заказов</span>
                </h3>
                <div class="order-history_table">
                    <ul class="order-history_head">
                        <li>Дата заказа</li>

                        <li>
                            <ul class="order-history_composition__table">

                                <li>
                                    Состав заказа
                                </li>

                                <li>
                                    <ul>
                                        <li>Цена</li>
                                        <li>Количество</li>
                                        <li>Сумма</li>
                                    </ul>
                                </li>

                            </ul>
                        </li>

                        <li>Сумма заказа</li>

                    </ul>

<?php $i=0; foreach ($orderList as $item=>$value):?>
                    <ul class="order-history_composition">
                        <li><?php echo $data[$i]?></li>
                        <li>
    <?php foreach ($value as $key=>$product):?>
                            <ul class="order-history_composition__table">
                                <li>
                                    <a href=""><?php echo $product['product']?></a>
                                </li>
                                <li>
                                    <ul>
                                        <li><?php echo $product['price']?>грн</li>
                                        <li><?php echo $product['quantity']?></li>
                                        <li><?php echo $product['total']?>грн</li>
                                    </ul>
                                </li>
                            </ul>
    <?php endforeach;?>
                        </li>

                        <li><?php echo $total[$i]?>грн</li>

                    </ul>
<?php $i++; endforeach;?>
                    <button>Предедущии</button>

                </div>
            </div>
        </div>
    </div>
</section>
<?php include ROOT . '/views/layouts/footer.php'; ?>