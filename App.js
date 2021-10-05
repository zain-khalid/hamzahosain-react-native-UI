import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

const SPACING = 30
const myColor = '#60BEAB'

export default function App() {
  const [qty, setQty] = React.useState(2)
  const [rate, setRate] = React.useState(50)
  const [total, setTotal] = React.useState(qty*rate)
  React.useEffect(() => {
    setTotal(qty*rate)
  }, [qty])
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
            <Image
              source={require('./assets/icons/Arrow-Left.png')}
              style={{width:35  , height: 30, resizeMode: 'stretch',}}
            />
            <Text style={{fontWeight:'bold',fontSize: 20}}>Billing</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop:SPACING}}>
          <View style={[styles.card, styles.smallShadow]}>
            <View style={{flex:1.5}}>
              <Image
                source={require('./assets/images/img1.png')}
                resizeMode="contain"
                style={{width:'100%'}}
              />
            </View>
            <View style={{flex:2, justifyContent: 'space-between', paddingLeft: SPACING/3}}>              
              <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:14, flex:1}}>Antidandruff Shampoo</Text>
                <View style={{fontSize:14, flex:1, flexDirection:'row-reverse'}}>
                  <Image source={require('./assets/images/star.png')} style={{marginLeft:SPACING*0.3}} />
                  <Text style={{fontSize:15}} >4.5</Text>
                </View>
              </View>
              <View style={{flexDirection:'row', }}>
                <Text style={{fontSize:17, flex:1, fontWeight: 'bold'}}>$ 50</Text>
                <View style={{fontSize:14, flex:1, flexDirection:'row-reverse'}}>
                  <View style={{backgroundColor:myColor, padding:SPACING*0.1, borderRadius:5}}>
                    <Icon
                      name='plus'
                      type='feather'
                      color='white'
                      onPress={() => setQty(qty+1)}
                    />
                  </View>
                  <View style={{padding:SPACING*0.1, borderRadius:5, alignItems:'center'}}>
                    <Text style={{paddingLeft:SPACING/2, paddingRight:SPACING/2}}>{qty}</Text>
                  </View>
                  <View style={{backgroundColor:myColor, padding:SPACING*0.1, borderRadius:5}}>
                    <Icon
                      name='minus'
                      type='feather'
                      color='white'
                      onPress={() => setQty(qty-1)} 
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{paddingTop:SPACING*2}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text style={{fontSize:17}}>Item Total</Text>
            </View>
            <View style={{flex:1, flexDirection:'row-reverse'}}>
            <Text style={{fontSize:17}}>$ {total}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', paddingTop: SPACING}}>
            <View style={{flex:1}}>
              <Text style={{fontSize:17}}>Service Charge</Text>
            </View>
            <View style={{flex:1, flexDirection:'row-reverse'}}>
              <Text style={{fontSize:17}}>$ 15</Text>
            </View>
          </View>
          <View style={{paddingTop:SPACING/3}}>
            <Image source={require('./assets/images/line1.png')} />
          </View>
          <View style={{flexDirection:'row', paddingTop: SPACING/3}}>
            <View style={{flex:1}}>
              <Text style={{fontSize:17, fontWeight:'700'}}>To Pay</Text>
            </View>
            <View style={{flex:1, flexDirection:'row-reverse'}}>
              <Text style={{fontSize:17}}>$ {total + 15}</Text>
            </View>
          </View>
          <View style={{paddingTop:SPACING/3}}>
            <Image source={require('./assets/images/line1.png')} />
          </View>

          <View style={{paddingTop:SPACING/2, marginBottom:SPACING}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>Payment Method</Text>
          </View>

          <View style={[{alignItems:'center', marginTop:SPACING/2}, styles.card2, styles.paymentShadow]}>
            <View style={{flex:1, alignItems:'center'}}>
              <Image
                source={require('./assets/images/money.png')}
              />
            </View>
            <View style={{flex:1}}>
              
              <Text style={{fontWeight:'bold', fontSize:17, color:'#444444'}}>Cash</Text>
              
            </View>
            <View style={{flex:1, alignItems:'flex-end'}}>
              <Image
                source={require('./assets/images/Arrow21.png')}
              />
            </View>
          </View>
          <View style={[{alignItems:'center', marginTop:SPACING/2}, styles.card2, styles.paymentShadow]}>
            <View style={{flex:1, alignItems:'center'}}>
              <Image
                source={require('./assets/images/credit-card.png')}
              />
            </View>
            <View style={{flex:1}}>
              
              <Text style={{fontWeight:'bold', fontSize:17, color:'#444444'}}>Credit Card</Text>
              
            </View>
            <View style={{flex:1, alignItems:'flex-end'}}>
              <Image
                source={require('./assets/images/Arrow21.png')}
              />
            </View>
          </View>
          <View style={[{alignItems:'center', marginTop:SPACING/2}, styles.card2, styles.paymentShadow]}>
            <View style={{flex:1, alignItems:'center'}}>
              <Image
                source={require('./assets/images/debit-card.png')}
              />
            </View>
            <View style={{flex:1}}>
              
              <Text style={{fontWeight:'bold', fontSize:17, color:'#444444'}}>Debit Card</Text>
              
            </View>
            <View style={{flex:1, alignItems:'flex-end'}}>
              <Image
                source={require('./assets/images/Arrow21.png')}
              />
            </View>
          </View>

          <View style={[{alignItems:'center', marginTop:SPACING/2}, styles.card3, styles.smallShadow]}>
              <Text style={{fontWeight:'bold', fontSize:18, color:'white', textAlign:'center'}}>Pay and Finish</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING,
    marginTop:SPACING
  },
  card:{
    backgroundColor:'rgb(255,255,255)',
    padding:SPACING/3,
    borderRadius:SPACING/2,
    flexDirection:'row'
  },
  card2:{
    backgroundColor:'rgb(255,255,255)',
    padding:SPACING/2,
    borderRadius:SPACING/2,
    flexDirection:'row'
  },
  card3:{
    backgroundColor:'#60BEAB',
    padding:SPACING/2,
    borderRadius:SPACING/2,
    marginTop:SPACING
  },
  smallShadow:{
    shadowColor: "#D3D3D3",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  paymentShadow:{
    shadowColor: "#D3D3D3",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  }
});
