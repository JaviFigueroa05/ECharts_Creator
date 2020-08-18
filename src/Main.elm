module Main exposing (..)
import Browser exposing (Document)
import Element exposing (Element, el, none, row, alignRight, alignLeft, fill, width, height, rgb255, spacing, padding, html, fillPortion, centerX, centerY)
import Element.Background as Background
import Element.Border as Border
import Html
import Html.Attributes as Attr

-- MAIN
main =
  Browser.document 
    { init = init
    , subscriptions = subscriptions
    , update = update
    , view = view
    }

-- MODEL
type alias Model = Int

init : () -> ( Model, Cmd Msg )
init _ =
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
      [ el [alignLeft, Background.color (rgb255 255 255 255), width (fillPortion 4), height fill] 
           (el [ centerX, centerY, Border.color (rgb255 0 0 0), Border.width 1, Border.dashed] (html (Html.div [ Attr.id "echarts", Attr.style "width" "600px", Attr.style "height" "400px"] [])))
      , el [alignRight, Background.color (rgb255 200 200 200), width (fillPortion 1), height fill] 
           (html (Html.p [] [ Html.text "Settings:" ]))
      ]
