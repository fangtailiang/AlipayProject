import React, { useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import PayModule from './page/alipay';
const App = () => {
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
  console.log(123456)
  let payStr='_input_charset="utf-8"&body="为13272534596充值10.0元，谨防诈骗"&business_params="{"mcCreateTradeIp":"221.237.60.6"}"&it_b_pay="3m"&notify_url="https://36.111.198.103:7301/payNotify/alipay/wallet/pay189"&out_trade_no="ZY2204131624302322229975"&partner="2088411218734278"&payment_type="1"&seller_id="zhifubao1@chinatelecom-ec.com.cn"&service="mobile.securitypay.pay"&sign="kTrUBkRlHPzJL5clKPvPUsxq5zVrVo%2BW2ebNvEmsJJitlOnWoUM77P5%2FWMA2doOXUoRR%2BauHcALDaZWSirlzDYchMbb%2BX0v4aVnfZnlitx6fxx0paKTb%2B3LCSoxIo%2FUu7zB%2BYNJJ8e6zwaxWpVB5o854O1TEvo%2F1GZ4r1%2BTNu0g%3D"&sign_type="RSA"&subject="为13272534596充值10.0元，谨防诈骗"&total_fee="9.95"'
  PayModule.alipay(payStr, res => {
          const { resultStatus } = res;
          const resObj = {
              '6001': '支付取消',
              '6002': '网络连接出错',
              '4000': '支付失败',
              '5000': '重复请求'
          };
          if (resultStatus === '9000') {

          } else {
              // 支付失败处理

          }
      });

  };

  const navigationView = (
    <View style={styles.navigationContainer}>
      <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
    </View>
  );

  return (
      <View style={styles.container}>
        <Button
          title="支付宝支付"
          onPress={() => changeDrawerPosition()}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    padding: 8
  }
});

export default App;