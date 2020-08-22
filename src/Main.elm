module Main exposing (..)
import Browser exposing (Document)
import Element exposing (Element, el, none, row, alignRight, alignLeft, fill, width, height, rgb255, spacing, padding, html, px, centerX, centerY)
import Element.Background as Background
import Element.Border as Border
import Html
import Html.Attributes as Attr
import Element
import Json.Decode exposing (Decoder)
import Html.Attributes exposing (property)

-- MAIN
main =
  Browser.document 
    { init = init
    , subscriptions = subscriptions
    , update = update
    , view = view
    }

-- Helper Types
type alias TitleProperties = 
  { id: { dataType: String }
  , show: { dataType: String, default: Bool }
  , text: { dataType: String, default: String }
  , link: { dataType: String, default: String }
  , target: { dataType: String, values: List String, default: String }
  , textStyle: { dataType: String, properties: {} } -- TODO
  , subtext: { dataType: String, default: String }
  , sublink: { dataType: String, default: String }
  , subtarget: { dataType: String, values: List String, default: String }
  , subtextStyle: { dataType: String, properties: {} } -- TODO
  , textAlign: { dataType: String, values: List String, default: String }
  , textVerticalAlign: { dataType: String, values: List String, default: String }
  , triggerEvent: { dataType: String, default: Bool }
  , padding: { dataType: String, default: Float }
  , itemGap: { dataType: String, default: Float }
  , zlevel: { dataType: String, default: Float }
  , z: { dataType: String, default: Float }
  , left: { dataType: String, default: String }
  , top: { dataType: String, default: String }
  , right: { dataType: String, default: String }
  , bottom: { dataType: String, default: String }
  , backgroundColor: { dataType: String, default: String }
  , borderColor: { dataType: String, default: String }
  , borderWidth: { dataType: String, default: Float }
  , borderRadius: { dataType: String, default: Float }
  , shadowBlur: { dataType: String }
  , shadowColor: { dataType: String }
  , shadowOffsetX: { dataType: String, default: Float }
  , shadowOffsetY: { dataType: String, default: Float }
  }
-- titlePropertiesDecoder: Decoder TitleProperties
-- titlePropertiesDecoder =

type alias EchartsTitle =
  { docunetation: String
  , dataType: String
  , properties: TitleProperties
  }
-- echartsTitleDecoder: Decoder EchartsTitle
-- echartsTitleDecoder =

type alias EchartsObject = 
  { title: EchartsTitle
  }
-- echartsObjectDecoder: Decoder EchartsObject
-- echartsObjectDecoder =

-- MODEL
-- TODO: Update Model to fit data structure
type alias Model = Int

init : Json.Decode.Value -> ( Model, Cmd Msg )
init echartsObject =
  ( 1
  , Cmd.none
  )

-- UPDATE
type Msg = Increment | Decrement

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    Increment ->
      ( model + 1
      , Cmd.none
      )
    Decrement ->
      ( model - 1
      , Cmd.none
      )

-- SUBSCRIPTIONS
subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none

-- VIEW
view : Model -> Document Msg
view model =
  { title = "Echarts Creator"
  , body = [ Element.layout [] layoutMain ]  
  }

layoutMain: Element Msg
layoutMain = 
  row [ width fill , height fill, spacing 0, padding 0 ] 
      [ mainPanel [alignLeft
                  , Background.color (rgb255 250 250 250)
                  , width fill
                  , height fill
                  ]
      , sidePanel [alignRight
                  , Background.color (rgb255 200 200 200)
                  , width (px 300)
                  , height fill
                  ]
      ]

mainPanel: List (Element.Attribute Msg) -> Element Msg
mainPanel attr =
  el attr
    (el [ centerX
        , centerY
        , Border.color (rgb255 0 0 0)
        , Border.width 1
        , Border.dashed
        ] 
        (html (Html.div [ Attr.id "echarts", Attr.style "width" "600px", Attr.style "height" "400px"] [])))

sidePanel: List (Element.Attribute Msg) -> Element Msg
sidePanel attr =
  el attr 
    (html (Html.p [] [ Html.text "Settings:" ]))