import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card } from 'native-base';
import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const Posts = require('../Data_Temp/Posts.json')
const Peoples = require('../Data_Temp/Peoples.json')
const MyPosts = require('../Data_Temp/MyPosts.json')
export default class Dashboard extends Component {
    state = {
        UserName: "John Smith",
        userImage: "https://tunnelwell.com/wp-content/uploads/2016/07/team-member-5.jpg",
        userMobile: "9876543210",
        Posts: MyPosts.length,
        Followers: 2500,
        Button1Color: "#f11",
        Button2Color: "#fff",
        Button3Color: "#fff",

        Button1_textColor: "#fff",
        Button2_textColor: "#111",
        Button3_textColor: "#111",
        ViewImage: false,
        Image: "",
        Likes: 0,
        Dislikes: 0,
        Post: ""
    }

    renderBody() {
        if (this.state.Button1Color == "#f11") {
            return Posts.map((item, key) => {
                return (
                    <Card key={key} style={Styles.PostCard}>
                        <View style={{ flexDirection: "row", alignItems: 'center', }}>
                            <Image source={{ uri: item.UserImage }} style={Styles.UserImage} />
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(1.6) }}>{item.UserName}</Text>
                                <Text style={{ fontSize: responsiveFontSize(1.2) }}>{item.PostDate} - {item.PostTime}</Text>
                            </View>
                        </View>
                        <Image source={{ uri: item.PostImage }} style={{ width: responsiveWidth(98), height: responsiveHeight(30) }} />
                        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', marginHorizontal: 10 }}>
                                <Icon name="like2" type="AntDesign" />
                                <Text>{item.Likes}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', marginHorizontal: 10 }}>
                                <Icon name="like2" type="AntDesign" />
                                <Text>{item.Dislikes}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ lineHeight: 24, fontSize: responsiveFontSize(1.3), paddingHorizontal: responsiveWidth(1) }}>{item.Post}</Text>
                    </Card>
                )
            })
        }
        else if (this.state.Button2Color == "#f11") {
            return Peoples.map((item, key) => {
                return (
                    <Card style={{ width: responsiveWidth(98), borderRadius: 80, paddingVertical: responsiveWidth(1), flexDirection: "row" }} key={key}>
                        <Image source={{ uri: item.Profile }}
                            style={{ height: responsiveWidth(20), width: responsiveWidth(20), borderRadius: 300 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: "bold" }}>{item.UserName}</Text>
                            <View style={{ flexDirection: "row", width: responsiveWidth(70) }}>
                                <View style={{ flex: 0.5 }}>
                                    <Text style={{ fontSize: responsiveFontSize(1.3) }}>Posts : {item.Posts}</Text>
                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <Text style={{ fontSize: responsiveFontSize(1.3) }}>Followers : {item.Followers}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <TouchableOpacity style={[Styles.Button2, { borderColor: "#f11" }]}>
                                    <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(1.3) }}>View Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[Styles.Button2, { backgroundColor: "#f11" }]}>
                                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: responsiveFontSize(1.3) }}>Follow</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>
                )
            })

        }
        else if (this.state.Button3Color == "#f11") {
            return (
                <View>
                    <Modal onRequestClose={() => { this.setState({ ViewImage: false }) }} transparent visible={this.state.ViewImage}>
                        <View style={{ flex: 1, backgroundColor: "rgba(1,1,1,0.4)", alignItems: 'center', justifyContent: 'center', }}>
                            <View style={{ backgroundColor: "#fff", height: responsiveHeight(90), width: responsiveWidth(95), borderRadius: 20 }}>
                                <Image source={{ uri: this.state.Image }} style={{ height: responsiveHeight(80), width: responsiveWidth(95), borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                                <View style={{ flexDirection: "row", justifyContent: 'flex-end', }}>
                                    <View style={{ flexDirection: "row", alignItems: 'center', marginHorizontal: 10 }}>
                                        <Icon name="like2" type="AntDesign" />
                                        <Text>{this.state.Likes}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: 'center', marginHorizontal: 10 }}>
                                        <Icon name="like2" type="AntDesign" />
                                        <Text>{this.state.Dislikes}</Text>
                                    </View>
                                </View>
                                <Text style={{ paddingHorizontal: 10, fontSize: responsiveFontSize(1.6) }}>{this.state.Post}</Text>
                            </View>
                        </View>
                    </Modal>
                    <View style={{ flexDirection: "row", marginTop: 20, paddingHorizontal: 10, alignItems: 'center', }}>
                        <Image source={{ uri: this.state.userImage }} style={{ width: responsiveWidth(30), height: responsiveWidth(30), borderRadius: 300 }} />
                        <View style={{ paddingLeft: responsiveWidth(3) }}>
                            <Text style={{ color: "#f11", fontSize: responsiveFontSize(2.4), fontWeight: "bold" }}>{this.state.UserName}</Text>
                            <Text>+91 {this.state.userMobile}</Text>
                            <View style={{ flexDirection: "row", borderRadius: 10, width: responsiveWidth(60), marginTop: 15, backgroundColor: 'rgba(1,1,1,0.2)' }}>
                                <View style={{ flex: 0.5, alignItems: 'center', }}>
                                    <Text style={{ fontSize: responsiveFontSize(1.6) }}> Followers : {this.state.Followers}</Text>
                                </View>
                                <View style={{ flex: 0.5, alignItems: 'center', }}>
                                    <Text style={{ fontSize: responsiveFontSize(1.6) }}> Posts : {this.state.Posts}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={{ margin: 10, fontWeight: "bold" }}>Posts</Text>
                    <View style={{ flexWrap: "wrap", flexDirection: "row", width: responsiveWidth(100) }}>
                        {MyPosts.map((item, key) => {
                            return (
                                <TouchableOpacity key={key} style={{ borderWidth: 1, borderColor: "#fff" }}

                                    onPress={() => {
                                        this.setState({
                                            Image: item.Image,
                                            Likes: item.Likes,
                                            Dislikes: item.Dislikes,
                                            Post: item.Post,
                                            ViewImage: true,
                                        })
                                    }}>
                                    <Image source={{ uri: item.Image }} style={{ width: responsiveWidth(24), height: responsiveWidth(24) }} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            )
        }
    }
    render() {
        return (
            <Container>
                <Header androidStatusBarColor="#111" style={{ backgroundColor: "#111" }}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Image source={require('../Images/Icons/AppLogo.png')} style={{ height: responsiveWidth(10), width: responsiveWidth(10) }} />
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <TouchableOpacity style={[Styles.Button1, { backgroundColor: this.state.Button1Color }]}
                            onPress={() => {
                                this.setState({
                                    Button1Color: "#f11",
                                    Button2Color: "#fff",
                                    Button3Color: "#fff",

                                    Button1_textColor: "#fff",
                                    Button2_textColor: "#111",
                                    Button3_textColor: "#111",
                                })
                            }}>
                            <Text style={[Styles.Button1_Text, { color: this.state.Button1_textColor }]}>Posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.Button1, { backgroundColor: this.state.Button2Color }]}
                            onPress={() => {
                                this.setState({
                                    Button1Color: "#fff",
                                    Button2Color: "#f11",
                                    Button3Color: "#fff",

                                    Button1_textColor: "#111",
                                    Button2_textColor: "#fff",
                                    Button3_textColor: "#111",
                                })
                            }}>
                            <Text style={[Styles.Button1_Text, { color: this.state.Button2_textColor }]}>Peoples</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.Button1, { backgroundColor: this.state.Button3Color }]}
                            onPress={() => {
                                this.setState({
                                    Button1Color: "#fff",
                                    Button2Color: "#fff",
                                    Button3Color: "#f11",

                                    Button1_textColor: "#111",
                                    Button2_textColor: "#111",
                                    Button3_textColor: "#fff",
                                })
                            }}>
                            <Text style={[Styles.Button1_Text, { color: this.state.Button3_textColor }]}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                    {this.renderBody()}
                </Content>
            </Container>
        );
    }
}
const Styles = StyleSheet.create({
    Button1: {
        backgroundColor: "#f11",
        borderRadius: 10,
        marginHorizontal: 10
    },
    Button2: {
        width: responsiveWidth(33),
        paddingVertical: 8,
        alignItems: 'center',
        borderWidth: 1,
        marginHorizontal: responsiveWidth(1),
        borderRadius: 20
    },
    Button1_Text: {
        paddingVertical: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(8),
        fontWeight: "bold"
    },
    PostCard: {
        width: responsiveWidth(98),
        alignSelf: "center",
        paddingBottom: responsiveWidth(1),
        borderRadius: 10
    },
    UserImage: {
        height: responsiveWidth(10),
        width: responsiveWidth(10),
        borderRadius: 250,
        marginVertical: 3,
        marginHorizontal: responsiveWidth(2)
    }
})