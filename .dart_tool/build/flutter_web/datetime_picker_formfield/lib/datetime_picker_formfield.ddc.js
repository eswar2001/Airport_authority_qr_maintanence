define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/painting/_network_image_web', 'packages/intl/intl'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__gestures__arena, packages__flutter__src__painting___network_image_web, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const focus_manager = packages__flutter__src__widgets__actions.src__widgets__focus_manager;
  const focus_scope = packages__flutter__src__widgets__actions.src__widgets__focus_scope;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const theme = packages__flutter__material.src__material__theme;
  const text_field = packages__flutter__material.src__material__text_field;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const intl = packages__intl__intl.intl;
  const datetime_picker_formfield = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let FormFieldStateOfDateTime = () => (FormFieldStateOfDateTime = dart.constFn(form.FormFieldState$(core.DateTime)))();
  let FormFieldStateOfDateTimeToTextField = () => (FormFieldStateOfDateTimeToTextField = dart.constFn(dart.fnType(text_field.TextField, [FormFieldStateOfDateTime()])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58829
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C1 || CT.C1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: null,
        [InputDecoration_icon]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name]: "TextCapitalization.none",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name$]: "TextAlign.start",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 27,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/datetime_picker_formfield/datetime_picker_formfield.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 17,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 17,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 17,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textInputAction",
        [_Location_column]: 17,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strutStyle",
        [_Location_column]: 17,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 17,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "readOnly",
        [_Location_column]: 17,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showCursor",
        [_Location_column]: 17,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 17,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLengthEnforced",
        [_Location_column]: 17,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 17,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minLines",
        [_Location_column]: 17,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expands",
        [_Location_column]: 17,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 17,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onEditingComplete",
        [_Location_column]: 17,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSubmitted",
        [_Location_column]: 17,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 17,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 17,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorWidth",
        [_Location_column]: 17,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorRadius",
        [_Location_column]: 17,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 17,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 17,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardAppearance",
        [_Location_column]: 17,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableInteractiveSelection",
        [_Location_column]: 17,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "buildCounter",
        [_Location_column]: 17,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/datetime_picker_formfield/datetime_picker_formfield.dart"
      });
    }
  });
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C1;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C0;
  const InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  const InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  const InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  const InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  const InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  const InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  const InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  const InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  const InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  const InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  const InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  const InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  const InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  const InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  const InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  const InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  const InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  const InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  const InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  const InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  const InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  const InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  const InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  const InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  const InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  const InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  const InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  const InputDecoration_hasFloatingPlaceholder = dart.privateName(input_decorator, "InputDecoration.hasFloatingPlaceholder");
  const InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  const InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  const InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  const InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  const InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  const InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  const InputDecoration_helperMaxLines = dart.privateName(input_decorator, "InputDecoration.helperMaxLines");
  const InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  const InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  const InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  const InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  const InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  let C2;
  const _name = dart.privateName(text_input, "_name");
  let C3;
  const _name$ = dart.privateName(ui, "_name");
  let C4;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C5;
  const _effectiveController = dart.privateName(datetime_picker_formfield, "_effectiveController");
  const _effectiveFocusNode = dart.privateName(datetime_picker_formfield, "_effectiveFocusNode");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C11;
  let C10;
  const format$ = dart.privateName(datetime_picker_formfield, "DateTimeField.format");
  const onShowPicker$ = dart.privateName(datetime_picker_formfield, "DateTimeField.onShowPicker");
  const resetIcon$ = dart.privateName(datetime_picker_formfield, "DateTimeField.resetIcon");
  const controller$ = dart.privateName(datetime_picker_formfield, "DateTimeField.controller");
  const focusNode$ = dart.privateName(datetime_picker_formfield, "DateTimeField.focusNode");
  const readOnly$ = dart.privateName(datetime_picker_formfield, "DateTimeField.readOnly");
  const onChanged$ = dart.privateName(datetime_picker_formfield, "DateTimeField.onChanged");
  datetime_picker_formfield.DateTimeField = class DateTimeField extends form.FormField$(core.DateTime) {
    get format() {
      return this[format$];
    }
    set format(value) {
      super.format = value;
    }
    get onShowPicker() {
      return this[onShowPicker$];
    }
    set onShowPicker(value) {
      super.onShowPicker = value;
    }
    get resetIcon() {
      return this[resetIcon$];
    }
    set resetIcon(value) {
      super.resetIcon = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get focusNode() {
      return this[focusNode$];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get readOnly() {
      return this[readOnly$];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    createState() {
      return new datetime_picker_formfield._DateTimeFieldState.new();
    }
    static tryFormat(date, format) {
      if (date != null) {
        try {
          return format.format(date);
        } catch (e$) {
          let e = dart.getThrown(e$);
        }
      }
      return "";
    }
    static tryParse(string, format) {
      let t1, t1$;
      if (dart.test((t1$ = (t1 = string, t1 == null ? null : t1[$isNotEmpty]), t1$ == null ? false : t1$))) {
        try {
          return format.parse(string);
        } catch (e$) {
          let e = dart.getThrown(e$);
        }
      }
      return null;
    }
    static combine(date, time) {
      let t2, t2$, t2$0, t2$1;
      return new core.DateTime.new(date.year, date.month, date.day, (t2$ = (t2 = time, t2 == null ? null : t2.hour), t2$ == null ? 0 : t2$), (t2$1 = (t2$0 = time, t2$0 == null ? null : t2$0.minute), t2$1 == null ? 0 : t2$1));
    }
    static convert(time) {
      let t2, t2$, t2$0, t2$1;
      return new core.DateTime.new(1, 1, 1, (t2$ = (t2 = time, t2 == null ? null : t2.hour), t2$ == null ? 0 : t2$), (t2$1 = (t2$0 = time, t2$0 == null ? null : t2$0.minute), t2$1 == null ? 0 : t2$1));
    }
  };
  (datetime_picker_formfield.DateTimeField.new = function(opts) {
    let t0;
    let format = opts && 'format' in opts ? opts.format : null;
    let onShowPicker = opts && 'onShowPicker' in opts ? opts.onShowPicker : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let onSaved = opts && 'onSaved' in opts ? opts.onSaved : null;
    let validator = opts && 'validator' in opts ? opts.validator : null;
    let initialValue = opts && 'initialValue' in opts ? opts.initialValue : null;
    let autovalidate = opts && 'autovalidate' in opts ? opts.autovalidate : false;
    let enabled = opts && 'enabled' in opts ? opts.enabled : true;
    let resetIcon = opts && 'resetIcon' in opts ? opts.resetIcon : C0 || CT.C0;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : C2 || CT.C2;
    let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C3 || CT.C3;
    let textInputAction = opts && 'textInputAction' in opts ? opts.textInputAction : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C4 || CT.C4;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : true;
    let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let maxLengthEnforced = opts && 'maxLengthEnforced' in opts ? opts.maxLengthEnforced : true;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : 1;
    let minLines = opts && 'minLines' in opts ? opts.minLines : null;
    let expands = opts && 'expands' in opts ? opts.expands : false;
    let maxLength = opts && 'maxLength' in opts ? opts.maxLength : null;
    let onEditingComplete = opts && 'onEditingComplete' in opts ? opts.onEditingComplete : null;
    let onFieldSubmitted = opts && 'onFieldSubmitted' in opts ? opts.onFieldSubmitted : null;
    let inputFormatters = opts && 'inputFormatters' in opts ? opts.inputFormatters : null;
    let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 2;
    let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
    let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : null;
    let scrollPadding = opts && 'scrollPadding' in opts ? opts.scrollPadding : C5 || CT.C5;
    let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : true;
    let buildCounter = opts && 'buildCounter' in opts ? opts.buildCounter : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[format$] = format;
    this[onShowPicker$] = onShowPicker;
    this[resetIcon$] = resetIcon;
    this[onChanged$] = onChanged;
    this[controller$] = controller;
    this[focusNode$] = focusNode;
    this[readOnly$] = readOnly;
    datetime_picker_formfield.DateTimeField.__proto__.new.call(this, {key: key, autovalidate: autovalidate, initialValue: initialValue, enabled: (t0 = enabled, t0 == null ? true : t0), validator: validator, onSaved: onSaved, builder: dart.fn(field => {
        let t0;
        let state = datetime_picker_formfield._DateTimeFieldState._check(field);
        let effectiveDecoration = (t0 = decoration, t0 == null ? C2 || CT.C2 : t0).applyDefaults(theme.Theme.of(field.context).inputDecorationTheme);
        return new text_field.TextField.new({controller: state[_effectiveController], focusNode: state[_effectiveFocusNode], decoration: effectiveDecoration.copyWith({errorText: field.errorText, suffixIcon: dart.test(state.shouldShowClearIcon(effectiveDecoration)) ? new icon_button.IconButton.new({icon: resetIcon, onPressed: dart.bind(state, 'clear'), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}) : null}), keyboardType: keyboardType, textInputAction: textInputAction, style: style, strutStyle: strutStyle, textAlign: textAlign, textDirection: textDirection, textCapitalization: textCapitalization, autofocus: autofocus, readOnly: readOnly, showCursor: showCursor, obscureText: obscureText, autocorrect: autocorrect, maxLengthEnforced: maxLengthEnforced, maxLines: maxLines, minLines: minLines, expands: expands, maxLength: maxLength, onChanged: dart.fn(string => field.didChange(datetime_picker_formfield.DateTimeField.tryParse(string, format)), StringTovoid()), onEditingComplete: onEditingComplete, onSubmitted: dart.fn(string => onFieldSubmitted == null ? null : onFieldSubmitted(datetime_picker_formfield.DateTimeField.tryParse(string, format)), StringTovoid()), inputFormatters: inputFormatters, enabled: enabled, cursorWidth: cursorWidth, cursorRadius: cursorRadius, cursorColor: cursorColor, scrollPadding: scrollPadding, keyboardAppearance: keyboardAppearance, enableInteractiveSelection: enableInteractiveSelection, buildCounter: buildCounter, $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
      }, FormFieldStateOfDateTimeToTextField()), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = datetime_picker_formfield.DateTimeField.prototype;
  dart.addTypeTests(datetime_picker_formfield.DateTimeField);
  dart.setMethodSignature(datetime_picker_formfield.DateTimeField, () => ({
    __proto__: dart.getMethods(datetime_picker_formfield.DateTimeField.__proto__),
    createState: dart.fnType(datetime_picker_formfield._DateTimeFieldState, [])
  }));
  dart.setLibraryUri(datetime_picker_formfield.DateTimeField, "package:datetime_picker_formfield/datetime_picker_formfield.dart");
  dart.setFieldSignature(datetime_picker_formfield.DateTimeField, () => ({
    __proto__: dart.getFields(datetime_picker_formfield.DateTimeField.__proto__),
    format: dart.finalFieldType(intl.DateFormat),
    onShowPicker: dart.finalFieldType(dart.fnType(async.Future$(core.DateTime), [framework.BuildContext, core.DateTime])),
    resetIcon: dart.finalFieldType(icon.Icon),
    controller: dart.finalFieldType(editable_text.TextEditingController),
    focusNode: dart.finalFieldType(focus_manager.FocusNode),
    readOnly: dart.finalFieldType(core.bool),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime]))
  }));
  const _controller = dart.privateName(datetime_picker_formfield, "_controller");
  const _focusNode = dart.privateName(datetime_picker_formfield, "_focusNode");
  const _handleControllerChanged = dart.privateName(datetime_picker_formfield, "_handleControllerChanged");
  const _handleFocusChanged = dart.privateName(datetime_picker_formfield, "_handleFocusChanged");
  const _hideKeyboard = dart.privateName(datetime_picker_formfield, "_hideKeyboard");
  datetime_picker_formfield._DateTimeFieldState = class _DateTimeFieldState extends form.FormFieldState$(core.DateTime) {
    get widget() {
      return datetime_picker_formfield.DateTimeField._check(super.widget);
    }
    get [_effectiveController]() {
      let t2;
      t2 = this.widget.controller;
      return t2 == null ? this[_controller] : t2;
    }
    get [_effectiveFocusNode]() {
      let t2;
      t2 = this.widget.focusNode;
      return t2 == null ? this[_focusNode] : t2;
    }
    get hasFocus() {
      return this[_effectiveFocusNode].hasFocus;
    }
    get hasText() {
      return this[_effectiveController].text[$isNotEmpty];
    }
    initState() {
      let t2, t2$;
      super.initState();
      if (this.widget.controller == null) {
        this[_controller] = new editable_text.TextEditingController.new({text: this.format(this.widget.initialValue)});
        this[_controller].addListener(dart.bind(this, _handleControllerChanged));
      }
      if (this.widget.focusNode == null) {
        this[_focusNode] = new focus_manager.FocusNode.new();
        this[_focusNode].addListener(dart.bind(this, _handleFocusChanged));
      }
      t2 = this.widget.controller;
      t2 == null ? null : t2.addListener(dart.bind(this, _handleControllerChanged));
      t2$ = this.widget.focusNode;
      t2$ == null ? null : t2$.addListener(dart.bind(this, _handleFocusChanged));
    }
    didUpdateWidget(oldWidget) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3;
      datetime_picker_formfield.DateTimeField._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.controller, oldWidget.controller)) {
        t2 = oldWidget.controller;
        t2 == null ? null : t2.removeListener(dart.bind(this, _handleControllerChanged));
        t2$ = this.widget.controller;
        t2$ == null ? null : t2$.addListener(dart.bind(this, _handleControllerChanged));
        if (oldWidget.controller != null && this.widget.controller == null) {
          this[_controller] = new editable_text.TextEditingController.fromValue(oldWidget.controller.value);
          this[_controller].addListener(dart.bind(this, _handleControllerChanged));
        }
        if (this.widget.controller != null) {
          this.setValue(this.parse(this.widget.controller.text));
          if (oldWidget.controller == null) {
            t2$0 = this[_controller];
            t2$0 == null ? null : t2$0.dispose();
            this[_controller] = null;
          }
        }
      }
      if (!dart.equals(this.widget.focusNode, oldWidget.focusNode)) {
        t2$1 = oldWidget.focusNode;
        t2$1 == null ? null : t2$1.removeListener(dart.bind(this, _handleFocusChanged));
        t2$2 = this.widget.focusNode;
        t2$2 == null ? null : t2$2.addListener(dart.bind(this, _handleFocusChanged));
        if (oldWidget.focusNode != null && this.widget.focusNode == null) {
          this[_focusNode] = new focus_manager.FocusNode.new();
          this[_focusNode].addListener(dart.bind(this, _handleFocusChanged));
        }
        if (this.widget.focusNode != null && oldWidget.focusNode == null) {
          t2$3 = this[_focusNode];
          t2$3 == null ? null : t2$3.dispose();
          this[_focusNode] = null;
        }
      }
    }
    didChange(value) {
      core.DateTime._check(value);
      if (this.widget.onChanged != null) this.widget.onChanged(value);
      super.didChange(value);
    }
    dispose() {
      let t2, t2$, t2$0, t2$1;
      t2 = this[_controller];
      t2 == null ? null : t2.dispose();
      t2$ = this[_focusNode];
      t2$ == null ? null : t2$.dispose();
      t2$0 = this.widget.controller;
      t2$0 == null ? null : t2$0.removeListener(dart.bind(this, _handleControllerChanged));
      t2$1 = this.widget.focusNode;
      t2$1 == null ? null : t2$1.removeListener(dart.bind(this, _handleFocusChanged));
      super.dispose();
    }
    reset() {
      super.reset();
      this[_effectiveController].text = this.format(this.widget.initialValue);
      this.didChange(this.widget.initialValue);
    }
    [_handleControllerChanged]() {
      if (this[_effectiveController].text != this.format(this.value)) this.didChange(this.parse(this[_effectiveController].text));
    }
    format(date) {
      return datetime_picker_formfield.DateTimeField.tryFormat(date, this.widget.format);
    }
    parse(text) {
      return datetime_picker_formfield.DateTimeField.tryParse(text, this.widget.format);
    }
    requestUpdate() {
      return async.async(dart.void, (function* requestUpdate() {
        if (!dart.test(this.isShowingDialog)) {
          this.isShowingDialog = true;
          let newValue = (yield this.widget.onShowPicker(this.context, this.value));
          this.isShowingDialog = false;
          if (newValue != null) {
            this[_effectiveController].text = this.format(newValue);
          }
        }
      }).bind(this));
    }
    [_handleFocusChanged]() {
      if (dart.test(this.hasFocus) && !dart.test(this.hadFocus) && (!dart.test(this.hasText) || dart.test(this.widget.readOnly))) {
        this.hadFocus = this.hasFocus;
        this[_hideKeyboard]();
        this.requestUpdate();
      } else {
        this.hadFocus = this.hasFocus;
      }
    }
    [_hideKeyboard]() {
      FutureOfvoid().microtask(dart.fn(() => focus_scope.FocusScope.of(this.context).requestFocus(new focus_manager.FocusNode.new()), VoidTovoid()));
    }
    clear() {
      return async.async(dart.void, (function* clear() {
        this[_hideKeyboard]();
        binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(_ => {
          this.setState(dart.fn(() => this[_effectiveController].clear(), VoidTovoid()));
        }, DurationToNull()));
      }).bind(this));
    }
    shouldShowClearIcon(decoration) {
      let t2;
      if (decoration === void 0) decoration = null;
      return this.widget.resetIcon != null && (dart.test(this.hasText) || dart.test(this.hasFocus)) && (t2 = decoration, t2 == null ? null : t2.suffixIcon) == null;
    }
  };
  (datetime_picker_formfield._DateTimeFieldState.new = function() {
    this[_controller] = null;
    this[_focusNode] = null;
    this.isShowingDialog = false;
    this.hadFocus = false;
    datetime_picker_formfield._DateTimeFieldState.__proto__.new.call(this);
    ;
  }).prototype = datetime_picker_formfield._DateTimeFieldState.prototype;
  dart.addTypeTests(datetime_picker_formfield._DateTimeFieldState);
  dart.setMethodSignature(datetime_picker_formfield._DateTimeFieldState, () => ({
    __proto__: dart.getMethods(datetime_picker_formfield._DateTimeFieldState.__proto__),
    [_handleControllerChanged]: dart.fnType(dart.void, []),
    format: dart.fnType(core.String, [core.DateTime]),
    parse: dart.fnType(core.DateTime, [core.String]),
    requestUpdate: dart.fnType(async.Future$(dart.void), []),
    [_handleFocusChanged]: dart.fnType(dart.void, []),
    [_hideKeyboard]: dart.fnType(dart.void, []),
    clear: dart.fnType(dart.void, []),
    shouldShowClearIcon: dart.fnType(core.bool, [], [input_decorator.InputDecoration])
  }));
  dart.setGetterSignature(datetime_picker_formfield._DateTimeFieldState, () => ({
    __proto__: dart.getGetters(datetime_picker_formfield._DateTimeFieldState.__proto__),
    widget: datetime_picker_formfield.DateTimeField,
    [_effectiveController]: editable_text.TextEditingController,
    [_effectiveFocusNode]: focus_manager.FocusNode,
    hasFocus: core.bool,
    hasText: core.bool
  }));
  dart.setLibraryUri(datetime_picker_formfield._DateTimeFieldState, "package:datetime_picker_formfield/datetime_picker_formfield.dart");
  dart.setFieldSignature(datetime_picker_formfield._DateTimeFieldState, () => ({
    __proto__: dart.getFields(datetime_picker_formfield._DateTimeFieldState.__proto__),
    [_controller]: dart.fieldType(editable_text.TextEditingController),
    [_focusNode]: dart.fieldType(focus_manager.FocusNode),
    isShowingDialog: dart.fieldType(core.bool),
    hadFocus: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/datetime_picker_formfield/datetime_picker_formfield", {
    "package:datetime_picker_formfield/datetime_picker_formfield.dart": datetime_picker_formfield
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["datetime_picker_formfield.dart"],"names":[],"mappings":"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","file":"datetime_picker_formfield.ddc.js"}');
  // Exports:
  return {
    datetime_picker_formfield: datetime_picker_formfield
  };
});

//# sourceMappingURL=datetime_picker_formfield.ddc.js.map
