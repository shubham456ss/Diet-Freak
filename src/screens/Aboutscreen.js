import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
    Image,
} from 'react-native';

const Aboutscreen = ({navigation}) => {

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text>
          Hello there! 👋 We're the team behind --App Name--, and we're thrilled
          to have you on board with us on your journey towards better health and
          wellness.
        </Text>

        <Text>Our Mission </Text>
        <Text>
          Our mission is simple: to empower individuals like you to make
          informed choices about your diet and lifestyle, leading to happier,
          healthier lives. We believe that small, sustainable changes can have a
          big impact, and our app is designed to support you every step of the
          way. Who We Are We're a passionate team of developers, designers, and
          health enthusiasts dedicated to creating intuitive and effective tools
          to help you achieve your wellness goals. With backgrounds in
          nutrition, fitness, and technology, we bring a unique blend of
          expertise to the table to create a seamless user experience.
</Text>
          <Text>Our Values </Text>
          <Text>
          Our Values At --App Name--, we're committed to: Accuracy: Providing
          reliable, evidence-based information to help you make informed
          choices. Accessibility: Ensuring our app is user-friendly and
          accessible to individuals of all backgrounds and abilities. Support:
          Offering personalized support and guidance to help you navigate your
          wellness journey.
        </Text>

        <Text>Innovation:</Text>
        <Text>
          Continuously improving and innovating our app to meet the evolving
          needs of our users.
        </Text>

        <Text>
          Get in Touch We love hearing from our users! Whether you have
          feedback, questions, or just want to say hello, don't hesitate to
          reach out to us at -Contact Email-. Your input helps us make --App
          Name-- even better. Thank you for choosing --App Name-- as your
          partner in health and wellness. We're excited to join you on your path
          to a healthier, happier you!
        </Text>
      </View>

      <View style={styles.container}>
        <Text>About Us</Text>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollContainerHorizontal}
          horizontal>
          <View style={styles.developer}>
            <Text>Mike Johnson Role: Lead Developer</Text>
            <Text>
              Bio: With over a decade of experience in software development,
              Mike is passionate about creating user-friendly apps that make a
              positive impact on people's lives. When he's not coding, you can
              find him hiking in the great outdoors or experimenting in the
              kitchen with new recipes.
            </Text>
          </View>

          <View style={styles.developer}>
            <Text>Jason Lee Role: UI/UX</Text>
            <Text>
              Designer Bio: Jason is a creative powerhouse with a keen eye for
              design. He's responsible for crafting the sleek and intuitive
              interface that you see in --App Name--. Outside of work, Jason
              enjoys photography, travel, and exploring new coffee shops around
              town.
            </Text>
          </View>

          <View style={styles.developer}>
            <Text>Remo Patel Role: Nutrition Specialist</Text>
            <Text>
              Bio: Remo is a certified nutritionist with a passion for helping
              others achieve their wellness goals. He brings his expertise in
              diet and nutrition to --App Name--, ensuring that the information
              provided is accurate, science-backed, and easy to understand.
            </Text>
          </View>

          <View style={styles.developer}>
            <Text>Nikshit Sharma Role: Support & Community Manager</Text>
            <Text>
              Bio: Nikshit is the friendly face behind our customer support
              team. He's dedicated to providing personalized assistance to our
              users and fostering a supportive community within the --App Name--
              community. In his free time, Nikshit enjoys playing guitar and
              volunteering at local charities.
            </Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  scrollContainerHorizontal: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#0f0',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  developer: {
    height: 100,
    width:150,
    margin:10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  highlight: {
    color: '#4CAF50',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Arial',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555',
    marginTop: 20,
  },
});

export default Aboutscreen;
