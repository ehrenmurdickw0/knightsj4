
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

import NavigationBar from '../../common/NavigationBar'
import {MORE_MENU} from '../../common/MoreMenu'
import GlobalStyles from '../../../res/styles/GlobalStyles'
import ViewUtil from '../../util/ViewUtils'
import {FLAG_LANGUAGE}from '../../dao/LanguageDao'
import AboutPage from './AboutPage'

import CustomKeyPage from './CustomKeyPage'
import SortPage from './SortKeyPage'
import AboutMePage from './AboutMePage'
import CustomThemePage from './CustomThemePage'
import BaseComponent from '../../base/BaseCommon'


export default class MinePage extends BaseComponent {

    constructor(props){
        super(props);
        this.state={
            customThemeVisible:false,
            theme:this.props.theme
        }
    }

    onClick(tab){

        let TargetComponent,params = {...this.props,menuType:tab}
        switch (tab){

            case MORE_MENU.Custom_Language:
                TargetComponent = CustomKeyPage;
                params.flag=FLAG_LANGUAGE.flag_language;
                break;

            case MORE_MENU.Custom_Key:
                TargetComponent = CustomKeyPage;
                params.flag=FLAG_LANGUAGE.flag_key;
                break;

            case MORE_MENU.Remove_Key:
                TargetComponent = CustomKeyPage;
                params.flag=FLAG_LANGUAGE.flag_key;
                params.isRemoveKeyPage = true;
                break;

            case MORE_MENU.Sort_Key:
                TargetComponent = SortPage;
                params.flag=FLAG_LANGUAGE.flag_key;
                break;

            case MORE_MENU.Sort_Language:
                TargetComponent = SortPage;
                params.flag=FLAG_LANGUAGE.flag_language;
                break;

            case MORE_MENU.Custom_Theme:
                this.setState({
                    customThemeVisible:true
                })
                break;

            case MORE_MENU.About_Author:
                TargetComponent =  AboutMePage;
                break;

            case MORE_MENU.About:
                TargetComponent = AboutPage;
                break;


        }

        if(TargetComponent){
            this.props.navigator.push({
                component:TargetComponent,
                params:params
            })
        }
    }

    renderCustomTheme(){
        return (
            <CustomThemePage
                visible={this.state.customThemeVisible}
                {...this.props}
                onClose = {()=>this.setState({customThemeVisible:false})}
            />

        )
    }

    createSettingItem(tag,icon,text){
        return ViewUtil.createSettingItem(()=>this.onClick(tag),icon,text,this.state.theme.styles.tabBarSelectedIcon,null);
    }

    render(){
        return <View style={GlobalStyles.listViewContainerStyle}>
            {/*?????????*/}
            <NavigationBar
                title={'??????'}
                style={this.state.theme.styles.navBar}
                statusBar={{backgroundColor:this.state.theme.themeColor}}
            />
            {/*????????????*/}
            <ScrollView>

                {/*=============????????????Section=============*/}
                <TouchableHighlight
                    underlayColor= 'transparent'
                    onPress={()=>this.onClick(MORE_MENU.About)}
                >
                    <View style={styles.itemInfoItemStyle}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../../res/images/ic_trending.png')}
                                   style={[{width:40,height:40,marginRight:10},this.state.theme.styles.tabBarSelectedIcon]}
                            />
                            <Text>GitHub Popular ????????????</Text>
                        </View>
                        <Image source={require('../../../res/images/ic_tiaozhuan.png')}
                            style={[{height:22,width:22},this.state.theme.styles.tabBarSelectedIcon]}
                        />
                    </View>
                </TouchableHighlight>
                {/*?????????*/}
                <View style={GlobalStyles.cellBottomLineStyle}></View>

                {/*=============????????????Section=============*/}
                <Text style={styles.groupTitleStyle}>????????????</Text>
                <View style={GlobalStyles.cellBottomLineStyle}></View>
                {/*???????????????*/}
                {this.createSettingItem(MORE_MENU.Custom_Language,require('../../../res/images/ic_custom_language.png'),'???????????????')}
                <View style={GlobalStyles.cellBottomLineStyle}></View>


                {/*????????????*/}
                {this.createSettingItem(MORE_MENU.Sort_Language,require('../../../res/images/ic_swap_vert.png'),'????????????')}
                <View style={GlobalStyles.cellBottomLineStyle}></View>

                {/*=============????????????Section=============*/}
                <Text style={styles.groupTitleStyle}>????????????</Text>

                <View style={GlobalStyles.cellBottomLineStyle}></View>
                {/*???????????????*/}
                {this.createSettingItem(MORE_MENU.Custom_Key,require('../../../res/images/ic_custom_language.png'),'???????????????')}
                <View style={GlobalStyles.cellBottomLineStyle}></View>
                {/*????????????*/}
                {this.createSettingItem(MORE_MENU.Sort_Key,require('../../../res/images/ic_swap_vert.png'),'????????????')}
                <View style={GlobalStyles.cellBottomLineStyle}></View>

                {/*????????????*/}
                {this.createSettingItem(MORE_MENU.Remove_Key,require('../../../res/images/ic_remove.png'),'????????????')}
                <View style={GlobalStyles.cellBottomLineStyle}></View>

                {/*=============??????Section=============*/}
                <Text style={styles.groupTitleStyle}>??????</Text>
                {/*???????????????*/}
                <View style={GlobalStyles.cellBottomLineStyle}></View>
                {this.createSettingItem(MORE_MENU.Custom_Theme,require('../../../res/images/ic_view_quilt.png'),'???????????????')}
                <View style={GlobalStyles.cellBottomLineStyle}></View>

                {/*???????????????????????????*/}
                {this.renderCustomTheme()}
            </ScrollView>
        </View>
    }
}


const styles = StyleSheet.create({

    itemInfoItemStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        height:76,
        backgroundColor:'white'
    },

    groupTitleStyle:{
        marginLeft:10,
        marginTop:15,
        marginBottom:6,
        color:'gray'
    }
});