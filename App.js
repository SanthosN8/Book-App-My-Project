import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
        justifyContent: 'center',
      }}>
      <View style={styles.image}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'TimesNewRoman',
            fontSize: 35,
            textAlign: 'center',
            color: 'red',
          }}>
          Book App
        </Text>
        <Text style={styles.heading}>Login</Text>
        <Image
          source={{
            width: 220,
            height: 150,
            uri: 'https://media.istockphoto.com/vectors/young-people-group-reading-books-study-learning-knowledge-and-vector-vector-id1206750602?k=20&m=1206750602&s=612x612&w=0&h=nOBI0vsqpURdDZ1dmcn9bys2Z_5gaIuAl1pfFujZiMk=',
          }}
        />

        <View style={styles.textbox}>
          <TextInput
            placeholder="   Username"
            style={styles.name}
            onChangeText={(email) => setEmail(email)}
          />
          <Text> </Text>
          <TextInput
            placeholder="   Password"
            style={styles.password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate('Reset')}>
          <Text
            style={{
              textAlign: 'center',
              color: 'blue',
              marginTop: 5,
              marginRight: 100,
            }}>
            Forgot Password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logbutton}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signbutton}
          onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Reset() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f7f9',
      }}>
      <Text style={{ fontWeight: 'bold', marginRight: 20, fontSize: 20 }}>
        Forgot Your Password?
      </Text>
      <View style={{ marginBottom: 300 }}>
        <Text style={{ padding: 20, marginRight: 50, fontSize: 15 }}>
          Email Address:
        </Text>
        <TextInput
          style={{
            backgroundColor: '#fff',
            borderWidth: 1,
            borderRadius: 5,
            width: 250,
            height: 40,
            marginLeft: 20,
          }}
        />
      </View>

      <Button title="Reset Password" color="blue" />
    </View>
  );
}

function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.image}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'TimesNewRoman',
            fontSize: 35,
            textAlign: 'center',
            color: 'red',
          }}>
          Book App
        </Text>
        <Text style={styles.heading}>Register</Text>
        <Image
          source={{
            width: 220,
            height: 150,
            uri: 'https://media.istockphoto.com/vectors/young-people-group-reading-books-study-learning-knowledge-and-vector-vector-id1206750602?k=20&m=1206750602&s=612x612&w=0&h=nOBI0vsqpURdDZ1dmcn9bys2Z_5gaIuAl1pfFujZiMk=',
          }}
        />

        <View style={styles.textbox2}>
          <TextInput placeholder="   Name" style={styles.register} />
          <Text> </Text>
          <TextInput
            placeholder="   Email"
            style={styles.register}
            onChangeText={(email) => setEmail(email)}
          />
          <Text> </Text>
          <TextInput
            placeholder="   Password"
            style={styles.register}
            onChangeText={(password) => setPassword(password)}
          />
          <Text style={{ color: '#ADD8E6', marginTop: 10 }}>
            Already have an Account?
            <TouchableHighlight onPress={() => navigation.navigate('Login')}>
              <Text>Login</Text>
            </TouchableHighlight>
          </Text>

          <TouchableOpacity style={styles.signbutton}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                marginTop: 10,
                fontWeight: 'bold',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Dashboard({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
            color: '#19b85c',
          }}>
          Books Categories
        </Text>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Autobiography')}>
            <Image
              source={{
                width: 250,
                height: 100,
                uri: 'https://cdn.lifehack.org/wp-content/uploads/2015/04/gandhi.jpeg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Autobiography</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            style={{ paddingBottom: 5 }}
            onPress={() => navigation.navigate('Fantasy')}>
            <Image
              source={{
                width: 250,
                height: 100,
                uri: 'https://miro.medium.com/max/1200/1*iReJleUEZCcL0BKqofM2iQ.jpeg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Fantasy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('Historical')}>
            <Image
              source={{
                width: 250,
                height: 100,
                uri: 'https://marketing.prowritingaid.com/The%20Essential%20Historical%20Fiction%20List.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Historical Fiction</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            TouchableOpacity
            onPress={() => navigation.navigate('Science')}>
            <Image
              source={{
                width: 250,
                height: 100,
                uri: 'https://cdn.vox-cdn.com/thumbor/eekU_HQCnlYV0fv7Rr26JCnDhbo=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/67636711/jbareham_201014_1047_scifi_books_essentials_02.0.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Science Fiction</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            style={{ fontWeight: 'bold' }}
            TouchableOpacity
            onPress={() => navigation.navigate('Adventure')}>
            <Image
              source={{
                width: 250,
                height: 100,
                uri: 'https://miro.medium.com/max/1400/1*rBk6-QlIbxjVrsIBQedovw.jpeg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Adventure</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function Autobiography({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
            color: '#19b85c',
          }}>
          Autobiography
        </Text>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('Kalam')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://rukminim2.flixcart.com/image/416/416/km3s1ow0/regionalbooks/s/1/k/wings-of-fire-turning-points-a-journey-though-challenges-set-of-original-imagf2qupfbegn4q.jpeg?q=70',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>
              Wings of Fire A. P. J. Abdul Kalam
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Autobiography')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://images-na.ssl-images-amazon.com/images/I/41b4No1SuLL.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Satya ke Prayog</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Autobiography')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://images-na.ssl-images-amazon.com/images/I/912GShgBGEL.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Dreams From My Father</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function Fantasy({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
            color: '#19b85c',
          }}>
          Fantasy Books
        </Text>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Potter')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>
              Harry Potter and the Prisoner of Azkaban
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Autobiography')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488944731l/34509427._SX318_.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>
              Moana: The Mighty Maui Makes a Friend
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Autobiography')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://store.goodreads.lk/wp-content/uploads/2020/10/9780141346830.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>
              The Battle of the Labyrinth
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function Historical({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
            color: '#19b85c',
          }}>
          Historical Fiction
        </Text>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PS')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://images-na.ssl-images-amazon.com/images/I/91s48sH6xqL.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Ponniyin Selvan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Autobiography')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1395335069l/21523063.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>I, Claudius</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Autobiography')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://images-na.ssl-images-amazon.com/images/I/71NDa85qT7L.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>
              Shivaji: The Great Maratha
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function Science({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
            color: '#19b85c',
          }}>
          Science Fiction
        </Text>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Martian')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://images-na.ssl-images-amazon.com/images/I/81wFMY9OAFL.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>The Martian</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Autobiography')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://images-na.ssl-images-amazon.com/images/I/71MBvBhzu3L.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Dune</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Autobiography')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Ender%27s_Game_poster.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Ender's Game</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function Adventure({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
            color: '#19b85c',
          }}>
          Adventure Books
        </Text>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Historical Fiction')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://images.penguinrandomhouse.com/cover/9780143105954',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Moby-Dick</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Hobbit')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://www.pluggedin.com/wp-content/uploads/2020/01/hobbit-cover-670x1024.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>
              The Hobbit, or There and Back Again
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Autobiography')}>
            <Image
              source={{
                width: 250,
                height: 220,
                uri: 'https://gayabookshelf.files.wordpress.com/2020/06/king-solomons-mine.jpg',
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>King Solomon's Mines</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function Kalam() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontWeight:'Bold',fontSize:28,color:'#f2c26e'}}>Wings of Fire</Text>
      <Image
              source={{
                width: 250,
                height: 300,
                uri: 'https://rukminim2.flixcart.com/image/416/416/km3s1ow0/regionalbooks/s/1/k/wings-of-fire-turning-points-a-journey-though-challenges-set-of-original-imagf2qupfbegn4q.jpeg?q=70',
              }}
            />
       
      <Text style={{fontSize:15,marginLeft:40,alignItems:'center',justifyContent:'center'}}>
         Title:Wings Of Fire   {'\n'} {'\n'}
         Authors: A. P. J. Abdul Kalam, Arun Tiwari  {'\n'} {'\n'}
         ISBN: 9788173711466 {'\n'} {'\n'}
         Originally published: 1999   {'\n'} {'\n'}
         Pages: 180 (paperback edition)   {'\n'} {'\n'}
         Subject: India's journey to self-reliance in technology   {'\n'} {'\n'}
         languages: English, Malayalam   {'\n'} 
      </Text>
    </View>
  );
}

function Potter() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontWeight:'Bold',fontSize:28,color:'#f2c26e'}}>Harry Potter and the Prisoner of Azkaban</Text>
      <Image
              source={{
                width: 250,
                height: 300,
                uri: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
              }}
            />
       
      <Text style={{fontSize:15,marginLeft:40,alignItems:'center',justifyContent:'center'}}>
         Title:Harry Potter and the Prisoner of Azkaban   {'\n'} 
         Author: J. K. Rowling {'\n'} {'\n'} 
         ISBN: 9780439136358 {'\n'} {'\n'} 
         Originally published: July 8, 1999  {'\n'} {'\n'} 
         Pages: 317   {'\n'} {'\n'} 
         Genre: Fantasy {'\n'}{'\n'} 
         languages: English, Malayalam   {'\n'} {'\n'} 
      </Text>
    </View>
  );
}

function PS() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontWeight:'Bold',fontSize:28,color:'#f2c26e'}}>Ponniyin Selvan</Text>
      <Image
              source={{
                width: 250,
                border:1,
                height: 300,
                uri: 'https://images-na.ssl-images-amazon.com/images/I/91s48sH6xqL.jpg',
              }}
            /> 
      <Text style={{fontSize:15,marginLeft:40,alignItems:'center',justifyContent:'center'}}>
         Title:Ponniyin Selvan   {'\n'} {'\n'} 
         Author: Kalki Krishnamurthy  {'\n'} {'\n'} 
         ISBN:9781979190633{'\n'} {'\n'} 
         Price:Rs.2500.00
         Originally published: May 16, 1954   {'\n'}  {'\n'}  
         Genres: Novel, Historical Fiction, historical novel, Thriller, Romance novel, Spy fiction {'\n'}  {'\n'}  
         language: Tamil   {'\n'} {'\n'} 
         Characters: Vandiyathevan, Crown Prince Aditya Karikalan, Prince Arulmozhivarman, Periya Pazhavetturayar, Nandhini
      </Text>
      
    </View>
  );
}

function Martian() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontWeight:'Bold',fontSize:28,color:'#f2c26e'}}>The Martian</Text>
       <Image
              source={{
                width: 250,
                height: 300,
                uri: 'https://images-na.ssl-images-amazon.com/images/I/81wFMY9OAFL.jpg',
              }}
            />
      <Text style={{fontSize:15,marginLeft:5,alignItems:'center',justifyContent:'center'}}>
         Title:The Martian   {'\n'}  {'\n'}  
         Author: Andy Weir  {'\n'}  {'\n'} 
         ISBN:9781785031137 {'\n'}  {'\n'} 
         Originally published: 2011  {'\n'}  {'\n'} 
         Genres: Science fiction, Novel  {'\n'}  {'\n'} 
         languages: English   {'\n'}  {'\n'} 
      </Text>

    </View>
  );
}

function Hobbit() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontWeight:'Bold',fontSize:28,color:'#f2c26e'}}>The Hobbit, or There and Back Again</Text>
       <Image
              source={{
                width: 250,
                height: 300,
                uri: 'https://www.pluggedin.com/wp-content/uploads/2020/01/hobbit-cover-670x1024.jpg',
              }}
            />

      <Text style={{fontSize:15,marginLeft:40,alignItems:'center',justifyContent:'center'}}>
         Title:The Hobbit, or There and Back Again   {'\n'} {'\n'}
         Authors:  J. R. R. Tolkien {'\n'} {'\n'}
         ISBN:9780007525508 {'\n'} {'\n'}
         Originally published: September 21, 1937   {'\n'} {'\n'}
         Pages: 310 (first edition)   {'\n'} {'\n'}
         Set in: Middle-earth   {'\n'} {'\n'}
         Genre: High fantasy; Juvenile fantasy  
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Reset" component={Reset} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Autobiography" component={Autobiography} />
        <Drawer.Screen name="Historical" component={Historical} />
        <Drawer.Screen name="Fantasy" component={Fantasy} />
        <Drawer.Screen name="Science" component={Science} />
        <Drawer.Screen name="Adventure" component={Adventure} />
        <Drawer.Screen name="Kalam" component={Kalam} />
        <Drawer.Screen name="Potter" component={Potter} />
        <Drawer.Screen name="PS" component={PS} />
        <Drawer.Screen name="Martian" component={Martian} />
        <Drawer.Screen name="Hobbit" component={Hobbit} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}



export default App;

const styles = StyleSheet.create({
  name: {
    borderWidth: 1,
    width: 220,
    height: 40,
    borderRadius: 5,
    marginTop: 50,
  },

  password: {
    borderWidth: 1,
    width: 220,
    height: 40,
    borderRadius: 5,
  },

  textbox: {
    marginLeft: 2,
  },

  textbox2: {
    marginLeft: 2,
    marginTop: 10,
  },

  image: {
    marginBottom: 100,
    marginLeft: 5,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10,
  },

  logbutton: {
    backgroundColor: 'red',
    width: 100,
    height: 40,
    marginTop: 20,
    marginLeft: 60,
    borderRadius: 5,
  },

  signbutton: {
    backgroundColor: 'red',
    width: 100,
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 60,
  },

  register: {
    borderWidth: 1,
    width: 220,
    height: 40,
    borderRadius: 5,
  },

  box: {
    padding: 10,
  },
});
