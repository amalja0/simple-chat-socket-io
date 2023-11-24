package com.tujuhsembilan.socketio.model.dto;

import java.time.LocalDateTime;

import com.tujuhsembilan.socketio.enums.MessageType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MessageDto {
    
    private String username;
    private MessageType messageType;
    private String room;
    private String message;
    private LocalDateTime createdAt;

}
